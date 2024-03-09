import { Routes } from '../../../common/navigation/AppRoutes';
import { AppSection } from '../../enums/AppSection';

export const resolveAppSection = (route?: Routes): AppSection => {
	if (route === undefined) {
		console.log('Route is undefined');
		return AppSection.DASHBOARD;
	}
	const section = route.split('/')[1];
	if (Object.values(AppSection).includes(section as AppSection)) {
		return section as AppSection;
	}
	return AppSection.DASHBOARD;
};
