import { SettingsSection } from '../../features/user/settings/model/SettingsSection';
import { Locale } from '../../services/language/Locale';
import { LocaleCode } from '../enums/Locale';

export class AppConstants {
	// Details of the app
	public static readonly name = 'flo';
	public static readonly version = '1.0.0';
	public static readonly description = 'Finance Manager';
	public static readonly author = 'Nandan Reddy';
	public static readonly year = '2024';

	//
	public static readonly disabledSettingsSections: SettingsSection[] = [
		SettingsSection.ABOUT,
		// SettingsSection.HELP,
		SettingsSection.FEEDBACK,
	];

	// Data
	public static readonly englishLocale: Locale = {
		code: LocaleCode.EN,
		name: 'English',
		nativeName: 'English',
		isDownloaded: true,
	};
	public static readonly locales: Locale[] = [
		this.englishLocale,
		{
			code: LocaleCode.TE,
			name: 'Telugu',
			nativeName: 'తెలుగు',
			isDownloaded: false,
		},
		{
			code: LocaleCode.HI,
			name: 'Hindi',
			nativeName: 'हिंदी',
			isDownloaded: false,
		},
	];

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
