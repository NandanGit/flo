import { List, Card, Box } from '@mui/material';
import { AppConstants } from '../../constants/AppConstants';
import CustomClickableListItem from '../custom/CustomClickableListItem';
import useAppSectionsPanelView from './AppSectionsPanelView';
import SectionTabsPanel from './SectionTabsPanel';
import { Routes } from '../../../common/navigation/AppRoutes';
import AccountSummaryCard from '../../../common/account/AccountSummaryCard';
import AppLink from '../../../common/navigation/AppLink';

export interface AppSectionsPanelProps {
	disabledSections?: Routes[];
	showSectionsInCard?: boolean;
}

const AppSectionsPanel: React.FC<AppSectionsPanelProps> = ({
	disabledSections = AppConstants.disabledAppSections,
	showSectionsInCard = false,
}) => {
	const { appSections } = useAppSectionsPanelView();
	const sectionItems = appSections.map((section) => {
		const disabled = disabledSections.includes(section.route!);
		return (
			<AppLink key={section.label} to={section.route!} disabled={disabled}>
				<CustomClickableListItem
					item={section}
					onClick={() => {}}
					// isSelected={section.section === selectedSection}
					disabled={disabled}
					// showUnseen
				/>
			</AppLink>
		);
	});

	const sectionsList = (
		<List
			style={{
				flex: 1,
				padding: 0,
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				// border: '1px solid #0666',
			}}
		>
			{sectionItems}
			{/* <Divider sx={{ my: '0.5rem' }} />
			{sectionItems}
			<Divider sx={{ my: '0.5rem' }} />
			{sectionItems} */}
		</List>
	);
	return (
		<SectionTabsPanel>
			<AccountSummaryCard />
			<br />
			{showSectionsInCard ? (
				<Card
					// variant='outlined'
					style={{
						padding: '0.5rem 0.6rem',
						// flexGrow: 1,
						// height: '5rem', // There is no reason for this to be 5rem. I don't know how, but removing this line breaks the layout. SO DON'T REMOVE IT!
						overflow: 'scroll',
						// border: '1px solid #0666',
					}}
				>
					{sectionsList}
				</Card>
			) : (
				<Box
					sx={{
						flexGrow: 1,
						height: '5rem', // There is no reason for this to be 5rem. I don't know how, but removing this line breaks the layout. SO DON'T REMOVE IT!
						overflow: 'scroll',
						borderBottom: '1px solid #8882',
						// border: '1px solid #0666',
					}}
				>
					{sectionsList}
				</Box>
			)}
		</SectionTabsPanel>
	);
};

export default AppSectionsPanel;
