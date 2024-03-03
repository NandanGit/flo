import useCustomTabs from '../../../../shared/components/higher-order/CustomTabs/useCustomTabs';
import { SettingsMenuItemModel } from '../../../../shared/models/menu-item/SettingsMenuItemModel';
import { SettingsSection } from '../model/SettingsSection';

export const useSettingsSectionsPanelView = () => {
	const {
		tabs: sections,
		selected: selectedSection,
		select: selectSection,
	} = useCustomTabs<SettingsMenuItemModel, SettingsSection>();
	const accountSection = sections.find(
		(s) => s.section === SettingsSection.ACCOUNT
	)!;
	const otherSections = sections.filter(
		(s) => s.section !== SettingsSection.ACCOUNT
	);
	return {
		accountSection,
		otherSections,
		selectSection,
		selectedSection,
	};
};
