import useTabs from '../../../shared/components/hooks/useTabs';
import useLoc from '../../../hooks/useLoc';
import { MenuData } from '../../../shared/data/MenuData';
import { SettingsSection } from './model/SettingsSection';

const useSettingsPageView = () => {
	const loc = useLoc();

	const sections = MenuData.getSettingsSectionItems(loc);
	const { selectTab: selectSection, selectedTab: selectedSection } = useTabs({
		tabs: sections.map((s) => s.section),
		initialTab: SettingsSection.GENERAL,
	});

	return {
		selectSection,
		selectedSection,
		sections,
	};
};

export default useSettingsPageView;
