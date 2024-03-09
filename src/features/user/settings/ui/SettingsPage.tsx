import useLoc from '../../../../hooks/useLoc';
import { AppPage } from '../../../../shared/pages/AppPage';
import useSettingsPageView from '../SettingsPageView';
import SectionDivider from '../../../../shared/components/Sections/SectionDivider';
import SettingsSectionsPanel from './SettingsSectionsPanel';
import CustomTabs from '../../../../shared/components/higher-order/CustomTabs/CustomTabs';
import SettingsSectionContent from './SettingsSectionContent';

const SettingsPage: React.FC = () => {
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
				//
				/>
				<SectionDivider />
				<SettingsSectionContent />
			</CustomTabs>
		</AppPage>
	);
};

export default SettingsPage;
