export class TransactionSchemaConstants {
	public static readonly TYPES = ['INCOME', 'EXPENSE', 'TRANSFER'] as const;

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

	public static readonly recurring = {
		FREQUENCIES: ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY', 'EVERY'],
		every: {
			MIN: 1,
			MAX: 30,
		},
	} as const; // as const is crucial. without this the type of frequencies will be string[] and everything else in the object will be broadened. So dont remove this

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
		},
	} as const;
}
