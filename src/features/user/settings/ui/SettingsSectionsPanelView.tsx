import { useNavigate, useParams } from 'react-router-dom';
import { SettingsSection } from '../model/SettingsSection';
import { Routes } from '../../../../common/navigation/AppRoutes';
import { MenuData } from '../../../../shared/data/MenuData';
import useLoc from '../../../../hooks/useLoc';
import { resolveSettingsSection } from './utils';

export const useSettingsSectionsPanelView = () => {
	const navigate = useNavigate();
	const { section: sectionUrl } = useParams();
	const selectedSection = resolveSettingsSection(sectionUrl);

	const loc = useLoc();
	const sections = MenuData.getSettingsSectionItems(loc);

	const accountSection = sections.find(
		(s) => s.section === SettingsSection.ACCOUNT
	)!;

	const otherSections = sections.filter(
		(s) => s.section !== SettingsSection.ACCOUNT
	);

	const selectSectionAndUpdateURL = (section: SettingsSection) => {
		navigate(Routes.SETTINGS_SECTION.replace(':section', section));
	};

	return {
		accountSection,
		otherSections,
		selectSection: selectSectionAndUpdateURL,
		selectedSection,
	};
};
