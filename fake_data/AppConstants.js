/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
class AppConstants {
	// Details of the app
	static name = 'Flo';
	static version = '1.0.0';
	static description = 'Finance Manager';
	static author = 'Nandan Reddy';
	static year = '2024';

	// API URL
	//  static  apiUrl = 'http://localhost:3000';

	// Other constants
	static availableCurrencies = [
		'INR',
		'USD',
		'EUR',
		'GBP',
		'JPY',
		'AUD',
		'CAD',
	];

	static transactionTypes = ['income', 'expense'];

	static transactionRecipientTypes = ['merchant', 'peer', 'other'];

	static transactionStatuses = ['pending', 'completed', 'failed'];

	static transactionModes = ['cash', 'card', 'upi', 'net_banking'];

	static transactionCategories = [
		'food',
		'groceries',
		'clothing',
		'entertainment',
		'health',
		'education',
		'gifts',
		'other',
	];
}

module.exports = AppConstants;
