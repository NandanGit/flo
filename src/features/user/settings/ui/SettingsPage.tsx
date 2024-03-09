import useLoc from '../../../../hooks/useLoc';
import { AppPage } from '../../../../shared/pages/AppPage';
import SectionDivider from '../../../../shared/components/Sections/SectionDivider';
import SettingsSectionsPanel from './SettingsSectionsPanel';
import SettingsSectionContent from './SettingsSectionContent';

const SettingsPage: React.FC = () => {
	const loc = useLoc();

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
			// showSectionsInCard
			//
			/>
			<SectionDivider />
			<SettingsSectionContent />
		</AppPage>
	);
};

export default SettingsPage;
