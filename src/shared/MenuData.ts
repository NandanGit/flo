import { AppActions } from '../common/actions/AppActions';
import { Routes } from '../common/navigation/AppRoutes';
import { AppIcons } from './Icon';
import { MenuItemModel } from './models/MenuItemModel';

export class MenuData {
	public static readonly userMenuItems: MenuItemModel[] = [
		{
			label: 'Profile',
			icon: AppIcons.accountCircle,
			route: Routes.PROFILE,
		},
		{
			label: 'Settings',
			icon: AppIcons.settings,
			route: Routes.SETTINGS,
		},
		// {
		// 	label: 'Logout',
		// 	icon: AppIcons.logout,
		// 	action: AppActions.LOGOUT,
		// },
	];

	public static readonly drawerMenuItems: MenuItemModel[] = [
		{
			label: 'Dashboard',
			icon: AppIcons.dashboard,
			route: Routes.DASHBOARD,
		},
		{
			label: 'Transactions',
			icon: AppIcons.currencyExchange,
			route: Routes.TRANSACTIONS,
		},
	];

	public static readonly logoutMenuItem: MenuItemModel = {
		label: 'Logout',
		icon: AppIcons.logout,
		action: AppActions.LOGOUT,
	};
}
