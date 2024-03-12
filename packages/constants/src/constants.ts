export class Constants {
	// Details of the app
	public static readonly appName = 'flo';
	public static readonly version = '1.0.0';
	public static readonly description = 'Finance Manager';
	public static readonly author = 'Nandan Reddy';
	public static readonly year = '2024';

	// Routes
	public static readonly appBaseRoute = '/';

	// Other constants
	public static readonly availableCurrencies = [
		'INR',
		'USD',
		'EUR',
		'GBP',
		'JPY',
		'AUD',
		'CAD',
	] as const;

	public static readonly transactionTypes = ['income', 'expense'] as const;

	public static readonly transactionRecipientTypes = [
		'merchant',
		'peer',
		'other',
	] as const;

	public static readonly transactionStatuses = [
		'pending',
		'completed',
		'failed',
	] as const;

	public static readonly transactionModes = [
		'cash',
		'card',
		'upi',
		'net_banking',
	] as const;

	public static readonly transactionCategories = [
		'food',
		'groceries',
		'clothing',
		'entertainment',
		'health',
		'education',
		'gifts',
		'other',
	] as const;
}
