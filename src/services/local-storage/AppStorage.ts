import { LocaleCode } from '../../shared/enums/Locale';
import { LocalStorage } from './LocalStorage';
import { LocalStorageKey } from './LocalStorageKey';

export class AppStorage extends LocalStorage {
	public static setTranslations = (
		localeCode: LocaleCode,
		translations: object
	) => {
		super.setObject(
			`${LocalStorageKey.LOCALE}_${localeCode}` as LocalStorageKey,
			translations
		);
	};

	public static getTranslations = (localeCode: LocaleCode) => {
		return super.getObject(
			`${LocalStorageKey.LOCALE}_${localeCode}` as LocalStorageKey
		);
	};

	public static hasTranslations = (localeCode: LocaleCode) => {
		return !!this.getTranslations(localeCode);
	};

	public static removeTranslations = (localeCode: LocaleCode) => {
		super.remove(`${LocalStorageKey.LOCALE}_${localeCode}` as LocalStorageKey);
	};
}
