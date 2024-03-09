import { Currency } from '../../shared/types/currency';

export const resolveCurrencySymbol = (currency: Currency) => {
	switch (currency) {
		case 'INR':
			return '₹';
		case 'USD':
			return '$';
		case 'EUR':
			return '€';
		case 'GBP':
			return '£';
		case 'JPY':
			return '¥';
		case 'AUD':
			return 'A$';
		case 'CAD':
			return 'C$';
		default:
			return '';
	}
};
