import { List, ListItem, ListItemText } from '@mui/material';
import { AppPage } from '../../../shared/pages/AppPage';
import { usePeoplePageView } from '../PeoplePageView';
import RefreshHeader from '../../../shared/components/RefreshHeader/RefreshHeader';
import useLoc from '../../../hooks/useLoc';

const PeoplePage: React.FC = () => {
	const { people, peopleAreLoading, peopleStatus, loadPeople } =
		usePeoplePageView();
	const loc = useLoc();
	return (
		<AppPage title={loc.sPeople}>
			<RefreshHeader
				title={loc.sPeople}
				dataStatus={peopleStatus}
				onRefresh={loadPeople}
			/>
			{peopleAreLoading ? (
				<p>{loc.sLoading(loc.sPeople)}</p>
			) : (
				<List>
					{people.map((person) => (
						<ListItem key={person.id}>
							<ListItemText primary={person.name} />
						</ListItem>
					))}
				</List>
			)}
		</AppPage>
	);
};

export default PeoplePage;
