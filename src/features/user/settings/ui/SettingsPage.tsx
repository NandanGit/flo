import { AppPage } from '../../../../shared/pages/AppPage';
import useSettingsPageView from '../SettingsPageView';

const SettingsPage: React.FC = () => {
	useSettingsPageView();
	return (
		<AppPage title='Settings'>
			<h1>Settings</h1>
		</AppPage>
	);
};

export default SettingsPage;
