import { SettingsMenuItemModel } from '../../../../shared/models/menu-item/SettingsMenuItemModel';
import { SettingsSection } from '../model/SettingsSection';

export const useSettingsSectionsPanelView = (
	sections: SettingsMenuItemModel[]
) => {
	const accountSection = sections.find(
		(s) => s.section === SettingsSection.ACCOUNT
	)!;
	const otherSections = sections.filter(
		(s) => s.section !== SettingsSection.ACCOUNT
	);

	return {
		accountSection,
		otherSections,
	};
};
