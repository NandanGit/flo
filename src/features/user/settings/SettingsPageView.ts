import useLoc from '../../../hooks/useLoc';
import { MenuData } from '../../../shared/data/MenuData';

const useSettingsPageView = () => {
	const loc = useLoc();

	const sections = MenuData.getSettingsSectionItems(loc);

	return {
		sections,
	};
};

export default useSettingsPageView;
