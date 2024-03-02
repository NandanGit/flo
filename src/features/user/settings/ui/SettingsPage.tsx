import useLoc from '../../../../hooks/useLoc';
import { AppPage } from '../../../../shared/pages/AppPage';
import useSettingsPageView from '../SettingsPageView';

const SettingsPage: React.FC = () => {
	useSettingsPageView();
	const loc = useLoc();
	return (
		<AppPage title={loc.sSettings}>
			<h1>{loc.sSettings}</h1>
		</AppPage>
	);
};

export default SettingsPage;
