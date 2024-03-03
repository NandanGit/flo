import { List } from '@mui/material';
import React from 'react';
import SectionTabsPanel from '../../../../shared/components/Sections/SectionTabsPanel';
import CustomClickableListItem from '../../../../shared/components/custom/CustomClickableListItem';
import { SettingsSection } from '../model/SettingsSection';
import { SettingsMenuItemModel } from '../../../../shared/models/menu-item/SettingsMenuItemModel';
import { AppConstants } from '../../../../shared/constants/AppConstants';

export interface SettingsSectionsPanelProps {
	sections: SettingsMenuItemModel[];
	selectedSection: SettingsSection;
	selectSection: (section: SettingsSection) => void;
	disabledSections?: SettingsSection[];
}

const SettingsSectionsPanel: React.FC<SettingsSectionsPanelProps> = ({
	sections,
	selectSection,
	selectedSection,
	disabledSections = AppConstants.disabledSettingsSections,
}) => {
	return (
		<SectionTabsPanel>
			<List
				style={{
					flex: 1,
				}}
			>
				{sections.map((section) => (
					<CustomClickableListItem
						key={section.label}
						item={section}
						onClick={() => selectSection(section.section)}
						isSelected={section.section === selectedSection}
						disabled={disabledSections.includes(section.section)}
						// showUnseen
					/>
				))}
			</List>
		</SectionTabsPanel>
	);
};

export default SettingsSectionsPanel;
