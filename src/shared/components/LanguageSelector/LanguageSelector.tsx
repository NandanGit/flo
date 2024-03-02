import { FormControl, MenuItem, Select, SelectProps } from '@mui/material';
import React from 'react';
import { AppConstants } from '../../constants/AppConstants';
import { LocaleCode } from '../../enums/Locale';
import useLanguageSelectorView from './LanguageSelectorView';
import { AppIcon, AppIcons } from '../../Icon';
import LanguageManager from '../../../services/language/LanguageManager';

export interface LanguageSelectorProps extends SelectProps<LocaleCode> {
	id?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
	id = 'language-selector',
	style,
	...props
}) => {
	const { appLocale, onLocaleChange, menuOpen, openMenu } =
		useLanguageSelectorView();

	// console.log('appLocale:', appLocale);

	return (
		<FormControl>
			<Select
				labelId={id}
				value={appLocale}
				label='Locale'
				onChange={(e) => {
					onLocaleChange(e.target.value as LocaleCode);
				}}
				style={{ minWidth: '10rem', height: '2rem', ...style }}
				variant='standard'
				renderValue={(value) =>
					AppConstants.locales.find((l) => l.code === value)?.nativeName
				}
				open={menuOpen}
				onOpen={openMenu}
				// onClose={closeMenu}
				// onClose={(e) => {
				// 	console.log('e:', e);
				// 	// closeMenu();
				// }}
				{...props}
			>
				{AppConstants.locales.map((locale) => {
					const isDownloaded = LanguageManager.isDownloaded(locale.code);
					return (
						<MenuItem
							key={locale.code}
							value={locale.code}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							{locale.nativeName}
							{AppIcon(
								isDownloaded
									? AppIcons.checkCircleOutline
									: AppIcons.downloadForOffline,
								{
									style: {
										cursor: 'pointer',
									},
								}
							)}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};
