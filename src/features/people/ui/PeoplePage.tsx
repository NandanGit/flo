import { List, ListItem } from '@mui/material';
import { AppPage } from '../../../shared/pages/AppPage';
import { usePeoplePageView } from '../PeoplePageView';
import RefreshHeader from '../../../shared/components/RefreshHeader/RefreshHeader';

const PeoplePage: React.FC = () => {
	const { people, peopleAreLoading, peopleStatus, loadPeople } =
		usePeoplePageView();
	return (
		<AppPage title='People' useStaticGlassBackground={true}>
			<RefreshHeader
				title='People'
				dataStatus={peopleStatus}
				onRefresh={loadPeople}
			/>
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
