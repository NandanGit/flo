import { SharedSchemaConstants } from './shared';

export class TransactionSchemaConstants {
	// Limits
	// public static readonly title = {
	// 	MIN_LENGTH: 3,
	// 	MAX_LENGTH: 50,
	// } as const;

	public static readonly description = {
		MAX_LENGTH: 200,
	} as const;

	public static readonly amount = {
		MIN: 0,
		MAX: 99_00_000,
	} as const;

	// Types
	public static readonly TYPES = SharedSchemaConstants.TRANSACTION_TYPES;

	// public static readonly transactionRecipientTypes = [
	// 	'merchant',
	// 	'peer',
	// 	'other',
	// ] as const;

	public static readonly STATUSES = ['PENDING', 'COMPLETED', 'FAILED'] as const;

	public static readonly MODES = SharedSchemaConstants.PAYMENT_MODES;

	public static readonly split = {
		amount: {
			MIN: this.amount.MIN,
			MAX: this.amount.MAX,
		},
		DEBT_STATUSES: ['SETTLED', 'SETTLED_IN_CASH', 'PENDING'] as const,
	} as const;

	public static readonly merchant = {
		benefits: {
			TYPES: ['CASHBACK', 'DISCOUNT', 'OTHERS'] as const,
			amount: {
				MIN: this.amount.MIN,
				MAX: this.amount.MAX,
			},
		},
		breakup: {
			list: {
				name: {
					// MIN_LENGTH: this.title.MIN_LENGTH,
					// MAX_LENGTH: this.title.MAX_LENGTH,
					MIN_LENGTH: 3,
					MAX_LENGTH: 50,
				},
				quantity: {
					MIN: 0,
				},
				unit: {
					TYPES: [
						'kg',
						'g',
						'l',
						'ml',
						'dozen',
						'pack',
						'bottle',
						'box',
						'bag',
						'sachet',
						'packet',
						'piece',
						'slice',
						'pair',
						'set',
						'bundle',
						'roll',
						'unit', // Default
					] as const,
					DEFAULT: 'unit',
				},
				amountPerUnit: {
					MIN: this.amount.MIN,
					MAX: this.amount.MAX / 9_999,
				},
				discount: {
					MIN: 0,
					MAX: 100,
				},
			},
			additionalCharges: {
				TYPES: [
					'GST',
					'CGST',
					'SGST',
					'IGST',
					'VAT',
					'CESS',
					'TIP',
					'SERVICE_CHARGE',
					'OTHERS',
				] as const,

				name: {
					MIN_LENGTH: 3,
					MAX_LENGTH: 25,
				},

				amount: {
					MIN: 0,
					MAX: this.amount.MAX / 9_999,
				},
			},
		},
	} as const;

	public static readonly recurring = {
		FREQUENCIES: ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY', 'EVERY'],
		every: {
			MIN: 1,
			MAX: 30,
		},
	} as const; // as const is crucial. without this the type of frequencies will be string[] and everything else in the object will be broadened. So dont remove this

	// Errors
	public static readonly errors = {
		from: {
			INVALID_BREAKUP:
				'Sum of primary and secondary amount should be equal to the transaction amount',
		},
		split: {
			invalid: 'Split details are not valid',
			validForTransfer: 'Only expenses can be split',
		},
		recurring: {
			every: {
				REQUIRED_WHEN_FREQUENCY_IS_EVERY:
					'`Every` should be set when frequency is EVERY',
			},
		},
		others: {
			END_DATE_BEFORE_START_DATE: 'End date should be after start date',
			INVALID_TRANSFER:
				'From and to account should be different for a transfer',
		},
	} as const;
}
