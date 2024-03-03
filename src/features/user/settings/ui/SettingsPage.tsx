import useLoc from '../../../../hooks/useLoc';
import { AppPage } from '../../../../shared/pages/AppPage';
import useSettingsPageView from '../SettingsPageView';
import SectionDivider from '../../../../shared/components/Sections/SectionDivider';
import SectionContent from '../../../../shared/components/Sections/SectionContent';
import SettingsSectionsPanel from './SettingsSectionsPanel';

const SettingsPage: React.FC = () => {
	useSettingsPageView();
	const loc = useLoc();
	const { selectSection, selectedSection, sections } = useSettingsPageView();

	return (
		<AppPage
			title={loc.sSettings}
			boxSx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				// border: '1px solid #0666',
			}}
		>
			<SettingsSectionsPanel
				selectSection={selectSection}
				selectedSection={selectedSection}
				sections={sections}
			/>
			<SectionDivider />
			<SectionContent>
				<h1>Settings</h1>
			</SectionContent>
		</AppPage>
	);
};

export default SettingsPage;
