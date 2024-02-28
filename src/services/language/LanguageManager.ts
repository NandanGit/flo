import { AppConstants } from '../../shared/constants/AppConstants';
import { LocaleCode } from '../../shared/enums/Locale';
import { deepCopy } from '../../utils/data';
import { AppStorage } from '../local-storage/AppStorage';
import { Locale } from './Locale';

class LanguageManager {
	private static _languages = AppConstants.locales;

	static get languages() {
		return deepCopy(LanguageManager._languages);
	}

	static init() {
		// Go through the list of languages and see if they are already downloaded
		LanguageManager._languages.forEach((language) => {
			if (this._isEnglish(language.code)) return;
			// If the language is not downloaded, update the corresponding property
			if (AppStorage.hasTranslations(language.code)) {
				language.isDownloaded = true;
			}
		});
	}

	static get downloadedLanguages() {
		return deepCopy(
			LanguageManager._languages.filter((language) => language.isDownloaded)
		);
	}

	static isDownloaded(localeCode: LocaleCode) {
		if (this._isEnglish(localeCode)) return true;
		const language = LanguageManager._languages.find(
			(language) => language.code === localeCode
		);
		if (!language) return false;
		return language.isDownloaded;
	}

	static async download(localeCode: LocaleCode): Promise<object | null> {
		// If the language is already downloaded, return the translations
		if (LanguageManager.isDownloaded(localeCode)) {
			return this.getTranslations(localeCode);
		}
		// If the language is not downloaded, download the translations
		const translations = {}; // TODO: Download translations from the raw github file

		if (translations) {
			AppStorage.setTranslations(localeCode, translations);
			LanguageManager._markAsDownloaded(localeCode);
		}
		return translations;
	}

	static getTranslations(localeCode: LocaleCode) {
		return AppStorage.getTranslations(localeCode);
	}

	static delete(localeCode: LocaleCode) {
		AppStorage.removeTranslations(localeCode);
		LanguageManager._markAsDeleted(localeCode);
	}

	static getLocaleByCode(localeCode: LocaleCode) {
		return LanguageManager._languages.find(
			(language) => language.code === localeCode
		) as Locale;
	}

	private static _markAsDownloaded(localeCode: LocaleCode) {
		LanguageManager._languages.find(
			(language) => language.code === localeCode
		)!.isDownloaded = true;
	}

	private static _markAsDeleted(localeCode: LocaleCode) {
		if (this._isEnglish(localeCode)) return;
		LanguageManager._languages.find(
			(language) => language.code === localeCode
		)!.isDownloaded = false;
	}

	private static _isEnglish(localeCode: LocaleCode) {
		return localeCode === LocaleCode.EN;
	}
}

LanguageManager.init();

export default LanguageManager;
