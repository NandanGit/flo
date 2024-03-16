import { SharedSchemaConstants } from './shared';

export class TransactionSchemaConstants {
	// Limits
	public static readonly title = {
		MIN_LENGTH: 3,
		MAX_LENGTH: 50,
	} as const;

	public static readonly description = {
		MAX_LENGTH: 500,
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

	public static readonly MODES = [
		'CASH',
		'CARD',
		'UPI',
		'NET_BANKING',
		'OTHERS',
	] as const;

	public static readonly split = {
		amount: {
			MIN: this.amount.MIN,
			MAX: this.amount.MAX,
		},
		DEBT_STATUSES: ['PAID', 'PAID_IN_CASH', 'PENDING'] as const,
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
					MIN_LENGTH: this.title.MIN_LENGTH,
					MAX_LENGTH: this.title.MAX_LENGTH,
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
					MAX_LENGTH: 10,
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
		title: {
			MIN_LENGTH: `Transaction title should be at least ${this.title.MIN_LENGTH} characters long`,
			MAX_LENGTH: `Transaction title should be at most ${this.title.MAX_LENGTH} characters long`,
		},
		description: {
			MAX_LENGTH: `Transaction description should be at most ${this.description.MAX_LENGTH} characters long`,
		},
		amount: {
			MIN: 'Transaction amount should be a positive number',
			MAX: `Transaction amount should be at most ${this.amount.MAX}`,
		},
		type: `Transaction type should be one of ${this.TYPES.join(', ')}`,
		status: `Transaction status should be one of ${this.STATUSES.join(', ')}`,
		mode: `Transaction mode should be one of ${this.MODES.join(', ')}`,
		split: {
			amount: {
				MIN: 'Split amount should be a positive number',
				MAX: `Split amount should be at most ${this.split.amount.MAX}`,
			},
			debtStatus: `Debt status should be one of ${this.split.DEBT_STATUSES.join(
				', '
			)}`,
			invalid: 'Split details are not valid',
			validForTransfer: 'Only transactions of type TRANSFER can be split',
		},
		merchant: {
			benefits: {
				TYPE: `Benefit type should be one of ${this.merchant.benefits.TYPES.join(
					', '
				)}` as const,
				amount: {
					MIN: 'Benefit amount should be a positive number',
					MAX: `Benefit amount should be at most ${this.merchant.benefits.amount.MAX}`,
				},
			},
			breakup: {
				list: {
					name: {
						MIN_LENGTH: `Breakup name should be at least ${this.merchant.breakup.list.name.MIN_LENGTH} characters long`,
						MAX_LENGTH: `Breakup name should be at most ${this.merchant.breakup.list.name.MAX_LENGTH} characters long`,
					},
					quantity: {
						MIN: 'Quantity should be a positive number',
					},
					unit: `Unit should be one of ${this.merchant.breakup.list.unit.TYPES.join(
						', '
					)}`,
					amountPerUnit: {
						MIN: 'Amount per unit should be a positive number',
						MAX: `Amount per unit should be at most ${this.merchant.breakup.list.amountPerUnit.MAX}`,
					},
					discount: {
						MIN: 'Discount should be a positive number',
						MAX: 'Discount should be at most 100',
					},
				},
				additionalCharges: {
					TYPE: `Additional charge type should be one of ${this.merchant.breakup.additionalCharges.TYPES.join(
						', '
					)}`,
					name: {
						MIN_LENGTH: `Additional charge name should be at least ${this.merchant.breakup.additionalCharges.name.MIN_LENGTH} characters long`,
						MAX_LENGTH: `Additional charge name should be at most ${this.merchant.breakup.additionalCharges.name.MAX_LENGTH} characters long`,
					},
					amount: {
						MIN: 'Additional charge amount should be a positive number',
						MAX: `Additional charge amount should be at most ${this.merchant.breakup.additionalCharges.amount.MAX}`,
					},
				},
			},
		},
		recurring: {
			frequency: `Recurring frequency should be one of ${this.recurring.FREQUENCIES.join(
				', '
			)}`,
			every: {
				MIN: `Recurring should be set to at least ${this.recurring.every.MIN}`,
				MAX: `Recurring should be set to at most ${this.recurring.every.MAX}`,
			},
		},
		others: {
			END_DATE_BEFORE_START_DATE: 'End date should be after start date',
			INVALID_TRANSFER:
				'From and to account should be different for a transfer',
		},
	} as const;
}
