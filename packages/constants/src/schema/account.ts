import { SharedSchemaConstants } from './shared';

export class AccountSchemaConstants {
	// Limits
	public static readonly title = {
		MIN_LENGTH: 3,
		MAX_LENGTH: 20,
	} as const;

	public static readonly description = {
		MAX_LENGTH: 500,
	} as const;

	public static readonly initialBalance = {
		MAX: 99_99_99_999, // Ninety-nine crore ninety-nine lakh ninety-nine thousand nine hundred ninety-nine
	} as const;

	// Types
	public static readonly TYPES = [
		'SAVINGS',
		'CREDIT_CARD',
		'WALLET',
		'SALARY',
		'CURRENT',
		'INVESTMENT',
		// 'FIXED_DEPOSIT',
		// 'RECURRING_DEPOSIT',
		// 'PENSION',
		// 'MUTUAL_FUNDS',
		// 'OPTIONS',
		// 'SHARES',
		// 'DEMAT',
		'NRI',
		'OTHERS',
	] as const;

	public static readonly CURRENCIES = SharedSchemaConstants.CURRENCIES;
	public static readonly COLORS = SharedSchemaConstants.COLORS;

	// public static readonly STATUSES = [
	// 	'ACTIVE',
	// 	'INACTIVE',
	// 	'BLOCKED',
	// 	'CLOSED',
	// ] as const; // Not sure about this yet

	// Errors
	public static readonly errors = {
		initialBalance: {
			INVALID_FOR_ACCOUNT_TYPE: `Initial balance can only be negative for credit cards, wallets and other accounts.`,
		},
	} as const;
}
