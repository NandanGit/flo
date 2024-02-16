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
		{
			label: 'Merchants',
			icon: AppIcons.shoppingBag,
			route: Routes.MERCHANTS,
		},
		{
			label: 'People',
			icon: AppIcons.people,
			route: Routes.PEOPLE,
		},
		{
			label: 'Activity',
			icon: AppIcons.receiptLong,
			route: Routes.Activity,
		},
	];

	public static readonly logoutMenuItem: MenuItemModel = {
		label: 'Logout',
		icon: AppIcons.logout,
		action: AppActions.LOGOUT,
	};
}
