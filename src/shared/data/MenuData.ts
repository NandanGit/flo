import { AppActions } from '../../common/actions/AppActions';
import { Routes } from '../../common/navigation/AppRoutes';
import { AppIcons } from '../Icon';
import { MenuItemModel } from '../models/menu-item/MenuItemModel';
import { Loc } from '../types/Loc';

export class MenuData {
	public static getUserMenuItems = (loc: Loc): MenuItemModel[] => [
		{
			label: loc.sProfile,
			icon: AppIcons.accountCircle,
			route: Routes.PROFILE,
			unseen: true,
		},
		{
			label: loc.sSettings,
			icon: AppIcons.settings,
			route: Routes.SETTINGS,
			unseen: true,
			unseenCount: 3,
		},
	];

	public static getDrawerMenuItems = (loc: Loc): MenuItemModel[] => [
		{
			label: loc.sDashboard,
			icon: AppIcons.dashboard,
			route: Routes.DASHBOARD,
		},
		{
			label: loc.sTransactions,
			icon: AppIcons.currencyExchange,
			route: Routes.TRANSACTIONS,
			unseen: true,
		},
		{
			label: loc.sMerchants,
			icon: AppIcons.store,
			route: Routes.MERCHANTS,
			unseen: true,
		},
		{
			label: loc.sPeople,
			icon: AppIcons.people,
			route: Routes.PEOPLE,
		},
		{
			label: loc.sActivity,
			icon: AppIcons.receiptLong,
			route: Routes.Activity,
			unseen: true,
			unseenCount: 43,
		},
	];

	public static getLogoutMenuItem = (loc: Loc): MenuItemModel => ({
		label: loc.authLogout,
		icon: AppIcons.logout,
		action: AppActions.LOGOUT,
	});
}
