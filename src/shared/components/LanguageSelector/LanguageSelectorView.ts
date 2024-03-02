import { useState } from 'react';
import { AppConstants } from '../../constants/AppConstants';
import { LocaleCode } from '../../enums/Locale';
import LanguageManager from '../../../services/language/LanguageManager';
import { sleep } from '../../../utils/time';

const useLanguageSelectorView = () => {
	const [appLocale, setAppLocale] = useState(AppConstants.englishLocale.code);
	const [menuOpen, setMenuOpen] = useState(false);

	const onLocaleChange = async (locale: LocaleCode) => {
		if (!LanguageManager.isDownloaded(locale)) {
			await downloadLanguage(locale);
		}
		setAppLocale(locale);

		// Close the menu
		closeMenu();
	};

	const openMenu = () => {
		setMenuOpen(true);
	};
	const closeMenu = () => {
		setMenuOpen(false);
	};

	const downloadLanguage = async (locale: LocaleCode) => {
		const translations = await LanguageManager.download(locale);
		console.log(`Downloaded translations for ${locale}:`, translations);
		await sleep(2000);
	};

	// const deleteLanguage = (locale: LocaleCode) => {
	// 	LanguageManager.delete(locale);
	// 	setAppLocale(
	// 		appLocale === locale ? AppConstants.englishLocale.code : appLocale
	// 	);
	// };

	return {
		appLocale,
		onLocaleChange,
		menuOpen,
		openMenu,
		closeMenu,
		setAppLocale,
		downloadLanguage,
		// deleteLanguage,
	};
};

export default useLanguageSelectorView;
