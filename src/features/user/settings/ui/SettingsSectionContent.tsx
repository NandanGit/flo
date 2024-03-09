import React from 'react';
import { SettingsSection } from '../model/SettingsSection';
import SectionContent from '../../../../shared/components/Sections/SectionContent';
import useSettingsSectionContentView from './SettingsSectionContentView';

export interface SettingsSectionContentProps {}
const SettingsSectionContent: React.FC<SettingsSectionContentProps> = () => {
	const { selected: selectedSection } = useSettingsSectionContentView();
	const content = (() => {
		switch (selectedSection) {
			case SettingsSection.ACCOUNT:
				return (
					<SectionContent sectionTitle='Account Settings'>
						Here goes your account settings
					</SectionContent>
				);
			case SettingsSection.NOTIFICATIONS:
				return (
					<SectionContent sectionTitle='Notification Settings'>
						You can set the notification settings here
					</SectionContent>
				);
			case SettingsSection.PRIVACY:
				return (
					<SectionContent sectionTitle='Privacy Settings'>
						You can set the privacy settings here
					</SectionContent>
				);
			case SettingsSection.GENERAL:
				return (
					<SectionContent sectionTitle='General Settings'>
						You can set the general settings here
					</SectionContent>
				);
			default:
				return (
					<SectionContent sectionTitle='Coming Soon'>
						This section is coming soon
					</SectionContent>
				);
		}
	})();
	return <>{content}</>;
};

export default SettingsSectionContent;
