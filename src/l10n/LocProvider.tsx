import { LocalizationProvider, TranslationsJSON } from '@nandn/loc';
import React from 'react';
import enTranslations from '../assets/l10n/en.json';
import teTranslations from '../../hosted/l10n/te.json';
import hiTranslations from '../../hosted/l10n/hi.json';

export interface LocProviderProps {
	children: React.ReactNode;
}

const en: TranslationsJSON = enTranslations;
const te: TranslationsJSON = teTranslations;
const hi: TranslationsJSON = hiTranslations;
export const LocProvider: React.FC<LocProviderProps> = ({ children }) => {
	return (
		<LocalizationProvider
			config={{
				defaultLang: 'en', //   === === === === === === === === === ===
				curLang: 'te', //        This should be handled by redux later
				languages: [en, te, hi], // === === === === === === === === === ===
			}}
		>
			{children}
		</LocalizationProvider>
	);
};
