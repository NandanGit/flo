import { AppConstants } from '../../../../shared/constants/AppConstants';
import { SettingsSection } from '../model/SettingsSection';

export const resolveSettingsSection = (
	sectionUrl?: string
): SettingsSection => {
	if (Object.values(SettingsSection).includes(sectionUrl as SettingsSection)) {
		return sectionUrl as SettingsSection;
	}
	return AppConstants.defaultSettingsSection;
};
