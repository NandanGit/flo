import { Card, List } from '@mui/material';
import React from 'react';
import SectionTabsPanel from '../../../../shared/components/Sections/SectionTabsPanel';
import CustomClickableListItem from '../../../../shared/components/custom/CustomClickableListItem';
import { SettingsSection } from '../model/SettingsSection';
import { SettingsMenuItemModel } from '../../../../shared/models/menu-item/SettingsMenuItemModel';
import { AppConstants } from '../../../../shared/constants/AppConstants';
import { useSettingsSectionsPanelView } from './SettingsSectionsPanelView';
import AccountSettingsTabCard from './AccountSettingsTabCard';

export interface SettingsSectionsPanelProps {
	sections: SettingsMenuItemModel[];
	selectedSection: SettingsSection;
	selectSection: (section: SettingsSection) => void;
	disabledSections?: SettingsSection[];
	showSectionsInCard?: boolean;
}

const SettingsSectionsPanel: React.FC<SettingsSectionsPanelProps> = ({
	sections,
	selectSection,
	selectedSection,
	disabledSections = AppConstants.disabledSettingsSections,
	showSectionsInCard = false,
}) => {
	const { accountSection, otherSections } =
		useSettingsSectionsPanelView(sections);

	const sectionItems = otherSections.map((section) => (
		<CustomClickableListItem
			key={section.label}
			item={section}
			onClick={() => selectSection(section.section)}
			isSelected={section.section === selectedSection}
			disabled={disabledSections.includes(section.section)}
			// showUnseen
		/>
	));
	return (
		<SectionTabsPanel>
			<List
				style={{
					flex: 1,
					padding: '0',
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
				}}
			>
				<AccountSettingsTabCard
					isSelected={selectedSection === accountSection.section}
					onClick={() => selectSection(accountSection.section)}
				/>
				<br />
				{showSectionsInCard ? (
					<Card
						variant='outlined'
						style={{
							padding: '0.5rem 0.6rem',
							// border: '1px solid #0666',
							// height: '100%',
							flex: 1,
							overflow: 'scroll',
						}}
					>
						{sectionItems}
					</Card>
				) : (
					sectionItems
				)}
			</List>
		</SectionTabsPanel>
	);
};

export default SettingsSectionsPanel;
