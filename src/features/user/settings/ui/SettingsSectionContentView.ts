import { useParams } from 'react-router-dom';
import { SettingsSection } from '../model/SettingsSection';
import { AppConstants } from '../../../../shared/constants/AppConstants';

const useSettingsSectionContentView = () => {
	const { section: sectionUrl } = useParams();
	let selected = AppConstants.defaultSettingsSection;
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
