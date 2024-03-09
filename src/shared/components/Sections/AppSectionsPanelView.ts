import { useTheme } from '@mui/material';
import useLoc from '../../../hooks/useLoc';
import { MenuData } from '../../data/MenuData';

const useAppSectionsPanelView = () => {
	const loc = useLoc();
	const appSections = MenuData.getAppSectionItems(loc);
	const theme = useTheme();
	return {
		appSections,
		theme,
	};
};

export default useAppSectionsPanelView;
