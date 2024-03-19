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
	productIdSchema,
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

	// // Business Fields
	// title: zodStringSchema({
	// 	fieldName: 'Transaction title',
	// 	minLength: TR.title.MIN_LENGTH,
	// 	maxLength: TR.title.MAX_LENGTH,
	// }),

	// This will appear in the same order as the fields in the form (hopefully)
	type: zodEnumSchema(TR.TYPES, {
		fieldName: 'Transaction type',
	}),

	/**
	 * if type is 'EXPENSE' show the product field (still optional)
	 */
	product: productIdSchema.optional(),

	/**
	 * If type is 'EXPENSE' | 'TRANSFER', from should be an account ID
	 * If type is 'INCOME', from should be a merchant ID | person ID
	 */
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

	/**
	 * If type is 'EXPENSE' | 'TRANSFER', to should be an account ID
	 * If type is 'INCOME', to should be a merchant ID | person ID
	 */
	to: accountIdSchema.or(merchantIdSchema).or(personIdSchema),

	/**
	 * Amount is sometimes auto filled based on the product selected. For example, if the user selects a product, the amount will be auto filled with the product amount. The user can change it if they want.
	 */
	amount: zodNumberSchema({
		fieldName: 'Transaction amount',
		min: TR.amount.MIN,
		max: TR.amount.MAX,
	}),

	// status is defaulted to "COMPLETED" when the transaction is created. The user can change it to "PENDING" | "FAILED" if they want.
	status: zodEnumSchema(TR.STATUSES, {
		fieldName: 'Transaction status',
	}),

	/**
	 * Mode is not defaulted to anything. The user has to select the mode. The mode is used to denote how the transaction was done. For example, if the user pays through UPI, the mode will be UPI. If the user pays through cash, the mode will be cash.
	 */
	mode: zodEnumSchema(TR.MODES, {
		fieldName: 'Transaction mode',
	}),

	/**
	 * If a product is selected, then the category will be auto filled based on the product's category. The user can't change it as a product can only belong to one category. (Disable the field if a product is selected)
	 */
	categoryId: categoryIdSchema,

	/**
	 * Payment processor is used to denote the payment processor used for the transaction. For example, if the user pays through PhonePe, the payment processor will be the PhonePe, if the user pays through Visa, the payment processor will be Visa, etc.
	 * If this field is not present, it means the transaction was done without a payment processor. For example, if the user pays through cash, the payment processor will not be present.
	 * This can also be auto filled based on the from field. If type is an expense and from is an account of type card, the payment processor will be auto filled with the card's payment processor.
	 * If the type is an expense and mode is UPI, the payment processor will be auto filled with the primary UPI payment processor (CRED | GPay | PhonePe etc).
	 * If the type is an expense and mode is NET_BANKING, the payment processor will be auto filled with the primary NET_BANKING payment processor (HDFC | ICICI | SBI etc).
	 * If the user wants to change it, they can do so.
	 */
	processorId: paymentProcessorIdSchema.optional(),

	/**
	 * Transaction note can be used to store additional information about the transaction. Encourage the user to keep it short and sweet. Because unlike most apps currently in the market, we have dedicated fields for most of the things.
	 * We even have a dedicated field for the split, which is not present in most apps.
	 * We also have a dedicated field to neatly break down the transaction into multiple parts (This is useful when there are more than 1 product in the transaction)
	 */
	note: zodStringSchema({
		fieldName: 'Transaction description',
		maxLength: TR.description.MAX_LENGTH,
	}).optional(),

	/**
	 * Start date of the transaction. This is different from createdAt. createdAt is the date when the transaction was created. startDate is the date when the transaction should be considered for accounting purposes. For example, if a transaction is created on 1st Jan, but the startDate is 31st Dec, it means the transaction should be considered for accounting purposes from 31st Dec.
	 * This is defaulted to the current date. The user can change it if they want.
	 */
	startDate: zodDateSchema({
		allowFuture: true,
		fieldName: 'Transaction date',
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
					/**
					 * If a person involved in the split has settled the debt, the user can change the status to "SETTLED". The user will then be prompted to create the transaction for the settlement. This transaction is also added as a child transaction of the main transaction.
					 */
					transactionId: transactionIdSchema.optional(),
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
						z
							.object({
								name: zodStringSchema({
									fieldName: 'Product name',
									minLength: TR.merchant.breakup.list.name.MIN_LENGTH,
									maxLength: TR.merchant.breakup.list.name.MAX_LENGTH,
								}).optional(),

								productId: productIdSchema.optional(),

								quantity: zodNumberSchema({
									fieldName: 'Quantity',
									min: TR.merchant.breakup.list.quantity.MIN,
								}),

								unit: zodEnumSchema(TR.merchant.breakup.list.unit.TYPES, {
									fieldName: 'Unit',
								}),

								// amountPerUnit: zodNumberSchema({
								// 	fieldName: 'Amount per unit',
								// 	min: TR.merchant.breakup.list.amountPerUnit.MIN,
								// 	max: TR.merchant.breakup.list.amountPerUnit.MAX,
								// }),
								subTotal: zodNumberSchema({
									fieldName: 'Sub total',
									min: TR.merchant.breakup.list.subTotal.MIN,
									max: TR.merchant.breakup.list.subTotal.MAX,
								}),

								discount: zodNumberSchema({
									fieldName: 'Discount',
									min: TR.merchant.breakup.list.discount.MIN,
									max: TR.merchant.breakup.list.discount.MAX,
								}).optional(),
							})
							.refine(
								(data) => {
									// Name or productId should be present
									return data.name || data.productId;
								},
								{
									message:
										TR.errors.merchant.breakup.list.NAME_OR_PRODUCT_REQUIRED,
								}
							)
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

	/**
	 * Spent for is an optional field. It is used to denote if the transaction was done for someone else. This is not used if the user is expecting the money back. For that, we use the split field. This is used when the user pays for someone else and the user wants to keep track of it. For example, if the user pays for their sister's school fees, they can use this field to denote that the money was spent for their sister.
	 * The ui to add this field will be shown only if the transaction type is "EXPENSE" and the user checks the "Spent for someone else" checkbox. If the user checks the checkbox, they will be prompted to add the person's ID for whom the transaction was done. They can also add additional people if the transaction was done for multiple people.
	 */
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
