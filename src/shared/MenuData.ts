import { AppActions } from '../common/actions/AppActions';
import { Routes } from '../common/navigation/AppRoutes';
import { MenuItemModel } from './models/MenuItemModel';

export class MenuData {
	public static readonly userMenuItems: MenuItemModel[] = [
		{
			label: 'Profile',
			route: Routes.PROFILE,
		},
		{
			label: 'Settings',
			route: Routes.SETTINGS,
		},
		{
			label: 'Logout',
			action: AppActions.LOGOUT,
		},
	];

	public static readonly drawerMenuItems: MenuItemModel[] = [
		{
			label: 'Dashboard',
			route: Routes.DASHBOARD,
		},
		{
			label: 'About',
			route: Routes.ABOUT,
		},
		{
			label: 'Contact',
			route: Routes.CONTACT,
		},
	];
}
