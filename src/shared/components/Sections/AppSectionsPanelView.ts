import { useTheme } from '@mui/material';
import useLoc from '../../../hooks/useLoc';
import { MenuData } from '../../data/MenuData';
import { useLocation } from 'react-router-dom';
import { resolveAppSection } from './utils';
import { Routes } from '../../../common/navigation/AppRoutes';

const useAppSectionsPanelView = () => {
	const loc = useLoc();
	const appSections = MenuData.getAppSectionItems(loc);
	const theme = useTheme();
	// get pathname from react router
	const { pathname } = useLocation();
	const activeSection = resolveAppSection(pathname as Routes);
	return {
		appSections,
		activeSection,
		theme,
	};
};

export default useAppSectionsPanelView;
