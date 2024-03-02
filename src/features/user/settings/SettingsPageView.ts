import { useEffect } from 'react';
import LanguageManager from '../../../services/language/LanguageManager';

const useSettingsPageView = () => {
	useEffect(() => {
		console.log(
			'Downloaded languages:',
			LanguageManager.downloadedLanguages.map((l) => l.nativeName).join(', ')
		);
		// LanguageManager.download(LocaleCode.TE).then((translations) => {
		// 	console.log('Downloaded translations:', translations);
		// });
	}, []);
};

export default useSettingsPageView;
