import { Box, IconButton, List, ListItem } from '@mui/material';
import { AppPage } from '../../../shared/pages/AppPage';
import { usePeoplePageView } from '../PeoplePageView';
import { AppIcon, AppIcons } from '../../../shared/Icon';
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner/LoadingSpinner';

const PeoplePage: React.FC = () => {
	const { people, peopleAreLoading, loadPeople } = usePeoplePageView();
	return (
		<AppPage title='People' useStaticGlassBackground={true}>
			<Box display='flex' justifyContent='space-between' alignItems='start'>
				<h2>People</h2>
				<IconButton
					disabled={peopleAreLoading}
					size='small'
					onClick={loadPeople}
					sx={{
						width: '2rem',
						height: '2rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{peopleAreLoading ? (
						<LoadingSpinner loading={true} />
					) : (
						AppIcon(AppIcons.refresh)
					)}
				</IconButton>
			</Box>
			{peopleAreLoading ? (
				<p>Loading...</p>
			) : (
				<List>
					{people.map((person) => (
						<ListItem
							key={person.id}
							style={
								{
									// height: '5rem',
								}
							}
						>
							{person.name}
						</ListItem>
					))}
				</List>
			)}
		</AppPage>
	);
};

export default PeoplePage;
