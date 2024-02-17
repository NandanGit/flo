import { useEffect } from 'react';
import { AppPage } from '../../../shared/pages/AppPage';
import { useServices } from '../../../hooks/useServices';

const PeoplePage: React.FC = () => {
	const { peopleService } = useServices();

	useEffect(() => {
		let cancelled = false;
		console.clear();
		peopleService.getPeople().then((people) => {
			if (cancelled) return;
			console.log(
				'People:',
				people?.map((p) => p.name)
			);
		});

		return () => {
			cancelled = true;
		};
	}, [peopleService]);

	return (
		<AppPage title='People'>
			<h1>People</h1>
		</AppPage>
	);
};

export default PeoplePage;
