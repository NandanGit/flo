import SectionDivider from '../components/Sections/SectionDivider';
import { AppPage, AppPageProps } from './AppPage';
import SectionContent from '../components/Sections/SectionContent';
import AppSectionsPanel from '../components/Sections/AppSectionsPanel';

export interface AppScreenProps extends AppPageProps {}

export const AppScreen: React.FC<AppScreenProps> = ({
	children,
	// AppPageProps
	boxSx,
	...restAppPageProps
}) => {
	return (
		<AppPage
			boxSx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				// border: '1px solid #0666',
				...boxSx,
			}}
			{...restAppPageProps}
		>
			{/* <SectionTabsPanel>Hello</SectionTabsPanel> */}
			<AppSectionsPanel
			// showSectionsInCard
			//
			/>
			<SectionDivider />
			<SectionContent>{children}</SectionContent>
		</AppPage>
	);
};
