/* eslint-disable no-mixed-spaces-and-tabs */
import { z } from 'zod';
import { zodDateSchema } from '../shared/zodDate';
import {
	transactionIdSchema,
	categoryIdSchema,
	accountIdSchema,
	merchantIdSchema,
	personIdSchema,
	paymentProcessorIdSchema,
} from '../shared/zodId';
import { FloConstants } from '@flo.app/constants';
import { zodStringSchema } from '../shared/zodString';
import { zodNumberSchema } from '../shared/zodNumber';
import { zodEnumSchema } from '../shared/zodEnum';

const TR = FloConstants.schema.transaction;

const s2cTransactionSchemaRaw = z.object({
	// Unique transaction ID
	id: transactionIdSchema,
	// Date of transaction creation and last update. Both of them are received as ISO strings and later converted to Date objects.
	createdAt: zodDateSchema(),
	updatedAt: zodDateSchema().optional(),

	// Business Fields
	title: zodStringSchema({
		fieldName: 'Transaction title',
		minLength: TR.title.MIN_LENGTH,
		maxLength: TR.title.MAX_LENGTH,
	}),

	note: zodStringSchema({
		fieldName: 'Transaction description',
		maxLength: TR.description.MAX_LENGTH,
	}).optional(),

	amount: zodNumberSchema({
		fieldName: 'Transaction amount',
		min: TR.amount.MIN,
		max: TR.amount.MAX,
	}),

	type: zodEnumSchema(TR.TYPES, {
		fieldName: 'Transaction type',
	}),

	status: zodEnumSchema(TR.STATUSES, {
		fieldName: 'Transaction status',
	}),

	mode: zodEnumSchema(TR.MODES, {
		fieldName: 'Transaction mode',
	}),

	processorId: paymentProcessorIdSchema.optional(),

	categoryId: categoryIdSchema,

	// `From` can be different based on the transaction type
	// - For INCOME, it should be either a merchant ID or an person ID
	// - For Expense and Transfer, it should be an account ID
	from: z
		.object({
			// This is used in a very specific case where the user wants to use money from another account to partially pay for the transaction. For example, lets say that the bill is 550rs and the user wants to pay through PhonePe. The user notices that they have 70rs in their PhonePe wallet. They can use this field to denote that the 70rs was used from the PhonePe wallet and the rest (480rs) was used from the account linked to the PhonePe.
			primary: z.object({
				accountId: accountIdSchema,
				amount: zodNumberSchema({
					fieldName: 'Primary amount',
					min: TR.amount.MIN,
					max: TR.amount.MAX,
				}),
			}),
			secondary: z.object({
				accountId: accountIdSchema,
				amount: zodNumberSchema({
					fieldName: 'Secondary amount',
					min: TR.amount.MIN,
					max: TR.amount.MAX,
				}),
			}),
		})
		.or(merchantIdSchema)
		.or(personIdSchema)
		.or(accountIdSchema),
	// `To` can be different based on the transaction type
	// - For INCOME and Transfer, it should be an account ID
	// - For Expense, it should be either a merchant ID or an person ID
	to: accountIdSchema.or(merchantIdSchema).or(personIdSchema),

	// Start date of the transaction. This is different from createdAt. createdAt is the date when the transaction was created. startDate is the date when the transaction should be considered for accounting purposes. For example, if a transaction is created on 1st Jan, but the startDate is 31st Dec, it means the transaction should be considered for accounting purposes from 31st Dec.
	startDate: zodDateSchema({
		allowFuture: true,
		fieldName: 'Start date',
	}),

	// Split details (split amounts, debt status like paid | paid_in_cash | pending, persons involved in the split, etc.)
	split: z
		.object({
			// Splits in detail
			splits: z.array(
				z.object({
					personId: personIdSchema,
					amount: zodNumberSchema({
						fieldName: 'Split amount',
						min: TR.split.amount.MIN,
						max: TR.split.amount.MAX,
					}),
					status: zodEnumSchema(TR.split.DEBT_STATUSES, {
						fieldName: 'Debt status',
					}),
				})
			),
		})
		.optional(),

	// Other transactions which are a result of this transaction. For example, if the user buys a mobile phone, and creates a transaction. Then the user can create another transaction for the phone case as a child transaction of the main transaction. This is useful to keep track of all the transactions related to the main transaction.
	children: z.array(transactionIdSchema).optional(),

	// Merchant Specific Fields
	merchant: z
		.object({
			// Benefits
			benefits: z
				.array(
					z.object({
						type: zodEnumSchema(TR.merchant.benefits.TYPES, {
							fieldName: 'Benefit type',
						}),
						amount: zodNumberSchema({
							fieldName: 'Benefit amount',
							min: TR.merchant.benefits.amount.MIN,
							max: TR.merchant.benefits.amount.MAX,
						}),
					})
				)
				.optional(),

			// Breakup
			breakup: z
				.object({
					list: z.array(
						z.object({
							name: zodStringSchema({
								fieldName: 'Breakup name',
								minLength: TR.merchant.breakup.list.name.MIN_LENGTH,
								maxLength: TR.merchant.breakup.list.name.MAX_LENGTH,
							}),

							quantity: zodNumberSchema({
								fieldName: 'Quantity',
								min: TR.merchant.breakup.list.quantity.MIN,
							}),

							unit: zodEnumSchema(TR.merchant.breakup.list.unit.TYPES, {
								fieldName: 'Unit',
							}),

							amountPerUnit: zodNumberSchema({
								fieldName: 'Amount per unit',
								min: TR.merchant.breakup.list.amountPerUnit.MIN,
								max: TR.merchant.breakup.list.amountPerUnit.MAX,
							}),

							discount: zodNumberSchema({
								fieldName: 'Discount',
								min: TR.merchant.breakup.list.discount.MIN,
								max: TR.merchant.breakup.list.discount.MAX,
							}).optional(),
						})
					),

					// Metadata like tax, service charge, discount, etc.
					additionalCharges: z
						.array(
							z.object({
								type: zodEnumSchema(
									TR.merchant.breakup.additionalCharges.TYPES,
									{
										fieldName: 'Additional charge type',
									}
								),

								name: zodStringSchema({
									fieldName: 'Additional charge name',
									minLength:
										TR.merchant.breakup.additionalCharges.name.MIN_LENGTH,
									maxLength:
										TR.merchant.breakup.additionalCharges.name.MAX_LENGTH,
								}).optional(),

								amount: zodNumberSchema({
									fieldName: 'Additional charge amount',
									min: TR.merchant.breakup.additionalCharges.amount.MIN,
								}),
							})
						)
						.optional(),
				})
				.optional(),
		})
		.optional(),

	// Spent for is an optional field. It is used to denote if the transaction was done for someone else. This is not used if the user is expecting the money back. For that, we use the split field. This is used when the user pays for someone else and the user wants to keep track of it. For example, if the user pays for their sister's school fees, they can use this field to denote that the money was spent for their sister.
	spentFor: z
		.object({
			// Person ID
			personId: personIdSchema,
			// Additional people (For example, if the user buys a gift for their friends housewarming party, they can use this field to add their friend's spouse's ID denoting that the gift was for both of them)
			additionalPeople: z.array(personIdSchema).optional(),
		})
		.optional(),

	// recurring will be an optional object. If not present, it means the transaction is not recurring
	recurring: z
		.object({
			// recurring.frequency can be either DAILY, WEEKLY, MONTHLY, YEARLY, "EVERY"
			frequency: zodEnumSchema(TR.recurring.FREQUENCIES, {
				fieldName: 'Recurring frequency',
			}),
			// recurring.every will be a number between 1 and 30. It will be used to calculate the next recurring date. For example, if the frequency is WEEKLY and every is 2, it means the transaction will recur every 2 weeks. This field will be ignored if the frequency is not "EVERY"
			every: zodNumberSchema({
				fieldName: 'Recurring every',
				min: TR.recurring.every.MIN,
				max: TR.recurring.every.MAX,
			}).optional(),

			// recurring.until will be a date string. It will be used to calculate last recurring date. If this is not present, it means the transaction will recur indefinitely
			until: zodDateSchema({
				allowFuture: true,
				fieldName: 'Ending date',
			}).optional(),

			// recurring.skipped will be an array of date strings. It will be used to store the dates on which the transaction was skipped. This can be used to facilitate one time variations in the recurring transactions. If the user wants to edit the recurring transaction but only for a specific date, we can use this field to store the skipped dates and then create a new transaction for the specific date.
			skipped: z
				.array(
					zodDateSchema({
						allowFuture: true,
						fieldName: 'Skipped date',
					})
				)
				.optional(),

			// recurring.shouldRemind will be a boolean. If true, the user will be reminded about the transaction before the transaction date. If false, the user will not be reminded about the transaction.
			shouldRemind: z.boolean().optional(),
		})
		.refine(
			(val) => {
				if (val.frequency === 'EVERY') {
					return val.every !== undefined;
				}
				return true;
			},
			{
				message: TR.errors.recurring.every.REQUIRED_WHEN_FREQUENCY_IS_EVERY,
			}
		)
		.optional(),
});

export default s2cTransactionSchemaRaw;
// export type TransactionIN = z.input<typeof s2cTransactionSchemaRaw>;
export type TransactionOUT = z.output<typeof s2cTransactionSchemaRaw>['from'];
