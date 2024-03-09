import { useNavigate, useParams } from 'react-router-dom';
import useCustomTabs from '../../../../shared/components/higher-order/CustomTabs/useCustomTabs';
import { SettingsMenuItemModel } from '../../../../shared/models/menu-item/SettingsMenuItemModel';
import { SettingsSection } from '../model/SettingsSection';
import { useEffect } from 'react';
import { Routes } from '../../../../common/navigation/AppRoutes';

export const useSettingsSectionsPanelView = () => {
	const {
		tabs: sections,
		selected: selectedSection,
		select: selectSection,
	} = useCustomTabs<SettingsMenuItemModel, SettingsSection>();

	const { section: sectionUrl } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (sectionUrl) {
			const sectionUrls = Object.values(SettingsSection);
			if (sectionUrls.includes(sectionUrl as SettingsSection)) {
				selectSection(sectionUrl as SettingsSection);
			}
		}
	}, [sectionUrl, selectSection]);

	const accountSection = sections.find(
		(s) => s.section === SettingsSection.ACCOUNT
	)!;

	const otherSections = sections.filter(
		(s) => s.section !== SettingsSection.ACCOUNT
	);

	const selectSectionAndUpdateURL = (section: SettingsSection) => {
		// selectSection(section);
		// ROUTES.SETTINGS_SECTION will have :section as a parameter. replace will replace the :section with the actual section
		navigate(Routes.SETTINGS_SECTION.replace(':section', section));
	};

	return {
		accountSection,
		otherSections,
		selectSection: selectSectionAndUpdateURL,
		selectedSection,
	};
};
