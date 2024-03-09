import { useParams } from 'react-router-dom';
import { SettingsSection } from '../model/SettingsSection';

const useSettingsSectionContentView = () => {
	const { section: sectionUrl } = useParams();
	let selected = SettingsSection.GENERAL;
	if (sectionUrl) {
		if (
			Object.values(SettingsSection).includes(sectionUrl as SettingsSection)
		) {
			selected = sectionUrl as SettingsSection;
		}
	}
	return {
		selected,
	};
};

export default useSettingsSectionContentView;
