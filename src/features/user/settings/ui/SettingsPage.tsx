import useLoc from '../../../../hooks/useLoc';
import { AppPage } from '../../../../shared/pages/AppPage';
import useSettingsPageView from '../SettingsPageView';
import SectionDivider from '../../../../shared/components/Sections/SectionDivider';
import SectionContent from '../../../../shared/components/Sections/SectionContent';
import SettingsSectionsPanel from './SettingsSectionsPanel';
import CustomTabs from '../../../../shared/components/higher-order/CustomTabs/CustomTabs';

const SettingsPage: React.FC = () => {
	useSettingsPageView();
	const loc = useLoc();
	const { sections } = useSettingsPageView();

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
			<CustomTabs tabs={sections} keys={sections.map((s) => s.section)}>
				<SettingsSectionsPanel
				// showSectionsInCard
				/>
				<SectionDivider />
				<SectionContent sectionTitle='General Settings'>Hello</SectionContent>
			</CustomTabs>
		</AppPage>
	);
};

export default SettingsPage;
