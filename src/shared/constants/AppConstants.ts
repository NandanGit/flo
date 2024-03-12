import { Routes } from '../../common/navigation/AppRoutes';
import { SettingsSection } from '../../features/user/settings/model/SettingsSection';
import { Locale } from '../../services/language/Locale';
import { LocaleCode } from '../enums/Locale';

import { FloConstants } from '@flo.app/constants';

export class AppConstants extends FloConstants {
	public static readonly defaultSettingsSection = SettingsSection.GENERAL;

	public static readonly disabledSettingsSections: SettingsSection[] = [
		SettingsSection.ABOUT,
		// SettingsSection.HELP,
		SettingsSection.FEEDBACK,
	];

	public static readonly defaultAppSection = Routes.DASHBOARD;

	public static readonly disabledAppSections: Routes[] = [Routes.ACTIVITY];

	public static readonly AppSectionRoutes: Routes[] = [
		Routes.DASHBOARD,
		Routes.TIMELINE,
		Routes.TRANSACTIONS,
		Routes.MERCHANTS,
		Routes.PEOPLE,
		// Routes.ACTIVITY,
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
}
