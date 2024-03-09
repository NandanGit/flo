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
	const sectionItems = appSections.map((section) => (
		<AppLink to={section.route!}>
			<CustomClickableListItem
				key={section.label}
				item={section}
				onClick={() => {}}
				// isSelected={section.section === selectedSection}
				disabled={disabledSections.includes(section.route!)}
				// showUnseen
			/>
		</AppLink>
	));

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
						flexGrow: 1,
						height: '5rem', // There is no reason for this to be 5rem. I don't know how, but removing this line breaks the layout. SO DON'T REMOVE IT!
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
			{/* {sectionsList} */}
			{/* <List
				style={{
					flex: 1,
					padding: 0,
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					border: '1px solid #0666',
				}}
			>
				{showSectionsInCard ? (
					<Card
						variant='outlined'
						style={{
							padding: '0.5rem 0.6rem',
							border: '1px solid #0666',
							flexGrow: 1,
							height: '5rem', // There is no reason for this to be 5rem. I don't know how, but removing this line breaks the layout. SO DON'T REMOVE IT!
							overflow: 'scroll',
						}}
					>
						<List
							style={{
								padding: 0,
								border: '1px solid #0666',
							}}
						>
							{sectionItems}
							<Divider sx={{ my: '0.5rem' }} />
							{sectionItems}
						</List>
					</Card>
				) : (
					[...sectionItems, ...sectionItems, ...sectionItems]
				)}
			</List> */}
		</SectionTabsPanel>
	);
};

export default AppSectionsPanel;
