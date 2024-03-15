/* eslint-disable no-mixed-spaces-and-tabs */
import { z } from 'zod';
// import { SchemaConstants } from './shared/constants';
import { resolveAccountType } from './shared/utils/id';
import { zodDateSchema } from './shared/zodDate';
import { FloConstants } from '@flo.app/constants';
import {
	accountIdSchema,
	categoryIdSchema,
	merchantIdSchema,
	personIdSchema,
	transactionIdSchema,
} from './shared/zodId';

const TR = FloConstants.schema.transaction;

export const s2cTransactionSchemaRaw = z.object({
	// Unique transaction ID
	id: transactionIdSchema,
	// Date of transaction creation and last update. Both of them are received as ISO strings and later converted to Date objects.
	createdAt: zodDateSchema(),
	updatedAt: zodDateSchema().optional(),

	// Business Fields
	title: z
		.string()
		.min(TR.title.MIN_LENGTH, {
			message: TR.errors.title.MIN_LENGTH,
		})
		.max(TR.title.MAX_LENGTH, {
			message: TR.errors.title.MAX_LENGTH,
		}),
	description: z
		.string()
		.max(TR.description.MAX_LENGTH, {
			message: TR.errors.description.MAX_LENGTH,
		})
		.optional(),
	amount: z
		.number()
		.min(TR.amount.MIN, {
			message: TR.errors.amount.MIN,
		})
		.max(TR.amount.MAX, {
			message: TR.errors.amount.MAX,
		}),
	type: z.enum(TR.TYPES, {
		invalid_type_error: TR.errors.type,
	}),
	// Transaction Status
	status: z.enum(TR.STATUSES, {
		invalid_type_error: TR.errors.status,
	}),

	mode: z.enum(TR.MODES, {
		invalid_type_error: TR.errors.mode,
	}),

	// Categories is an array of category IDs
	// categories: z.array(categoryIdSchema),
	categoryId: categoryIdSchema,

	// `From` can be different based on the transaction type
	// - For INCOME, it should be either a merchant ID or an person ID
	// - For Expense and Transfer, it should be an account ID
	fromId: accountIdSchema.or(merchantIdSchema).or(personIdSchema),

	// `To` can be different based on the transaction type
	// - For INCOME and Transfer, it should be an account ID
	// - For Expense, it should be either a merchant ID or an person ID
	toId: accountIdSchema.or(merchantIdSchema).or(personIdSchema),

	// Start date of the transaction. This is different from createdAt. createdAt is the date when the transaction was created. startDate is the date when the transaction should be considered for accounting purposes. For example, if a transaction is created on 1st Jan, but the startDate is 31st Dec, it means the transaction should be considered for accounting purposes from 31st Dec.
	startDate: zodDateSchema({
		allowFuture: true,
	}),

	// Split details (split amounts, debt status like paid | paid_in_cash | pending, persons involved in the split, etc.)
	split: z
		.object({
			// Splits in detail
			splits: z.array(
				z.object({
					// Person ID
					personId: personIdSchema,
					// Amount
					amount: z
						.number()
						.min(TR.split.amount.MIN, {
							message: TR.errors.split.amount.MIN,
						})
						.max(TR.split.amount.MAX, {
							message: TR.errors.split.amount.MAX,
						}),
					// Debt status
					debtStatus: z.enum(TR.split.DEBT_STATUSES, {
						invalid_type_error: TR.errors.split.debtStatus,
					}),
				})
			),
		})
		.optional(),

	// Merchant Specific Fields
	merchant: z.object({
		// Benefits
		benefits: z
			.array(
				z.object({
					type: z.enum(TR.merchant.benefits.TYPES, {
						invalid_type_error: TR.errors.merchant.benefits.TYPE,
					}),
					amount: z
						.number()
						.min(TR.merchant.benefits.amount.MIN, {
							message: TR.errors.merchant.benefits.amount.MIN,
						})
						.max(TR.merchant.benefits.amount.MAX, {
							message: TR.errors.merchant.benefits.amount.MAX,
						}),
				})
			)
			.optional(),

		// Breakup
		breakup: z
			.object({
				list: z.array(
					z.object({
						// Name
						name: z
							.string()
							.min(TR.merchant.breakup.list.name.MIN_LENGTH, {
								message: TR.errors.merchant.breakup.list.name.MIN_LENGTH,
							})
							.max(TR.merchant.breakup.list.name.MAX_LENGTH, {
								message: TR.errors.merchant.breakup.list.name.MAX_LENGTH,
							}),

						// Quantity
						quantity: z.number().min(TR.merchant.breakup.list.quantity.MIN, {
							message: TR.errors.merchant.breakup.list.quantity.MIN,
						}),

						// Unit
						unit: z.enum(TR.merchant.breakup.list.unit.TYPES, {
							invalid_type_error: TR.errors.merchant.breakup.list.unit,
						}),

						// Amount per unit
						amountPerUnit: z
							.number()
							.min(TR.merchant.breakup.list.amountPerUnit.MIN, {
								message: TR.errors.merchant.breakup.list.amountPerUnit.MIN,
							})
							.max(TR.merchant.breakup.list.amountPerUnit.MAX, {
								message: TR.errors.merchant.breakup.list.amountPerUnit.MAX,
							}),

						// Discount
						discount: z
							.number()
							.min(TR.merchant.breakup.list.discount.MIN, {
								message: TR.errors.merchant.breakup.list.discount.MIN,
							})
							.max(TR.merchant.breakup.list.discount.MAX, {
								message: TR.errors.merchant.breakup.list.discount.MAX,
							}),
					})
				),

				// Metadata like tax, service charge, discount, etc.
				additionalCharges: z
					.array(
						z.object({
							// Type
							type: z.enum(TR.merchant.breakup.additionalCharges.TYPES, {
								invalid_type_error:
									TR.errors.merchant.breakup.additionalCharges.TYPE,
							}),

							// Name (Optional)
							name: z
								.string()
								.min(TR.merchant.breakup.additionalCharges.name.MIN_LENGTH, {
									message:
										TR.errors.merchant.breakup.additionalCharges.name
											.MIN_LENGTH,
								})
								.max(TR.merchant.breakup.additionalCharges.name.MAX_LENGTH, {
									message:
										TR.errors.merchant.breakup.additionalCharges.name
											.MAX_LENGTH,
								})
								.optional(),

							// Amount
							amount: z
								.number()
								.min(TR.merchant.breakup.additionalCharges.amount.MIN, {
									message:
										TR.errors.merchant.breakup.additionalCharges.amount.MIN,
								}),
						})
					)
					.optional(),
			})
			.optional(),
	}),

	// recurring will be an optional object. If not present, it means the transaction is not recurring
	recurring: z
		.object({
			// recurring.frequency can be either DAILY, WEEKLY, MONTHLY, YEARLY, "EVERY"
			frequency: z.enum(TR.recurring.FREQUENCIES, {
				invalid_type_error: TR.errors.recurring.frequency,
			}),
			// recurring.every will be a number between 1 and 30. It will be used to calculate the next recurring date. For example, if the frequency is WEEKLY and every is 2, it means the transaction will recur every 2 weeks. This field will be ignored if the frequency is not "EVERY"
			every: z
				.number()
				.min(TR.recurring.every.MIN, {
					message: TR.errors.recurring.every.MIN,
				})
				.max(TR.recurring.every.MAX, {
					message: TR.errors.recurring.every.MAX,
				}),

			// recurring.until will be a date string. It will be used to calculate last recurring date. If this is not present, it means the transaction will recur indefinitely
			until: zodDateSchema({
				allowFuture: true,
			}).optional(),

			// recurring.skipped will be an array of date strings. It will be used to store the dates on which the transaction was skipped. This can be used to facilitate one time variations in the recurring transactions. If the user wants to edit the recurring transaction but only for a specific date, we can use this field to store the skipped dates and then create a new transaction for the specific date.
			skipped: z
				.array(
					zodDateSchema({
						allowFuture: true,
					})
				)
				.optional(),
		})
		.optional(),
});

export const s2cTransactionSchema = s2cTransactionSchemaRaw.transform(
	(data) => {
		const { split } = data;
		const isSettled = split?.splits.every(
			(split) => split.debtStatus === 'PAID'
		);

		return {
			...data,
			senderType: resolveAccountType(data.fromId),
			receiverType: resolveAccountType(data.toId),
			split:
				split === undefined
					? undefined
					: {
							...split,
							isSettled,
					  },
		};
	}
);

// export type IncTransaction = z.input<typeof s2cTransactionSchema>;
// export type Transaction = z.output<typeof s2cTransactionSchema>;

export const c2sTransactionSchema = s2cTransactionSchemaRaw
	.omit({
		id: true,
		createdAt: true,
		updatedAt: true,
	})
	.refine(
		(data) => {
			// If recurring is present, the recurring.until should be greater than the startDate
			if (data.recurring?.until) {
				return data.startDate < data.recurring.until;
			}
		},
		{
			message: TR.errors.others.END_DATE_BEFORE_START_DATE,
		}
	)
	.refine(
		(data) => {
			if (data.type !== 'EXPENSE') {
				return !data.split; // If the transaction is not an expense, it should not have a split
			}
			return true;
		},
		{
			message: TR.errors.split.validForTransfer,
		}
	)
	.refine(
		({ split, amount }) => {
			if (!split) return true;
			// The sum of all split amounts should be less than or equal to the transaction amount
			// If the sum is less than the transaction amount, it means that the difference is the amount paid by the user. Rest of the amount is from the persons involved in the split
			const sum = split.splits.reduce((acc, curr) => {
				return acc + curr.amount;
			}, 0);
			return sum <= amount;
		},
		{ message: TR.errors.split.invalid }
	)
	.refine(
		(data) => {
			if (data.type === 'TRANSFER') {
				return data.fromId !== data.toId;
			}
			return true;
		},
		{
			message: TR.errors.others.INVALID_TRANSFER,
		}
	);

// export type OutTransaction = z.output<typeof c2sTransactionSchema>;
