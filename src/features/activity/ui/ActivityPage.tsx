import useLoc from '../../../hooks/useLoc';
import { AppPage } from '../../../shared/pages/AppPage';

const ActivityPage: React.FC = () => {
	const loc = useLoc();
	return (
		<AppPage title={loc.sActivity}>
			<h1>{loc.sActivity}</h1>
		</AppPage>
	);
};

export default ActivityPage;
