import { AppActions } from '../../common/actions/AppActions';
import { Routes } from '../../common/navigation/AppRoutes';
import { AppIcons } from '../Icon';
import { MenuItemModel } from '../models/MenuItemModel';

export class MenuData {
	public static readonly userMenuItems: MenuItemModel[] = [
		{
			label: 'Profile',
			icon: AppIcons.accountCircle,
			route: Routes.PROFILE,
			unseen: true,
		},
		{
			label: 'Settings',
			icon: AppIcons.settings,
			route: Routes.SETTINGS,
			unseen: true,
			unseenCount: 3,
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
			unseen: true,
		},
		{
			label: 'Merchants',
			icon: AppIcons.store,
			route: Routes.MERCHANTS,
			unseen: true,
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
			unseen: true,
			unseenCount: 43,
		},
	];

	public static readonly logoutMenuItem: MenuItemModel = {
		label: 'Logout',
		icon: AppIcons.logout,
		action: AppActions.LOGOUT,
	};
}
