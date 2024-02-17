export class AppConstants {
	// Details of the app
	public static readonly name = 'Flo';
	public static readonly version = '1.0.0';
	public static readonly description = 'Finance Manager';
	public static readonly author = 'Nandan Reddy';
	public static readonly year = '2024';

	// API URL
	// public static readonly apiUrl = 'http://localhost:3000';

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
}
