import { AppActions } from '../../common/actions/AppActions';
import { Routes } from '../../common/navigation/AppRoutes';
import { AppIcons } from '../Icon';
import { Loc } from '../types/Loc';
import { UserMenuItemModel } from '../models/menu-item/UserMenuItemModel';
import { AppDrawerMenuItemModel } from '../models/menu-item/AppDrawerMenuItemModel';
import { SettingsMenuItemModel } from '../models/menu-item/SettingsMenuItemModel';
import { SettingsSection } from '../../features/user/settings/model/SettingsSection';
import { AppConstants } from '../constants/AppConstants';
import { AppSectionMenuItemModel } from '../models/menu-item/AppSectionMenuItemModel';
import { resolveAppSection } from '../components/Sections/utils';

export class MenuData {
	public static getUserMenuItems = (loc: Loc): UserMenuItemModel[] => [
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

	public static getAppSectionItems = (loc: Loc): AppSectionMenuItemModel[] => {
		const allowedRoutes = AppConstants.AppSectionRoutes;
		return this.getDrawerMenuItems(loc)
			.filter((item) => allowedRoutes.includes(item.route!))
			.map((item) => ({
				...item,
				route: item.route!,
				section: resolveAppSection(item.route!),
			}));
	};

	public static getDrawerMenuItems = (loc: Loc): AppDrawerMenuItemModel[] => [
		{
			label: loc.sDashboard,
			icon: AppIcons.dashboard,
			route: Routes.DASHBOARD,
		},
		{
			label: loc.sTimeline,
			icon: AppIcons.timeline,
			route: Routes.TIMELINE,
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
			route: Routes.ACTIVITY,
			unseen: true,
			unseenCount: 43,
		},
	];

	public static getLogoutMenuItem = (loc: Loc): AppDrawerMenuItemModel => ({
		label: loc.authLogout,
		icon: AppIcons.logout,
		action: AppActions.LOGOUT,
	});

	public static getSettingsSectionItems = (
		loc: Loc
	): SettingsMenuItemModel[] => [
		{
			label: loc.sAccount,
			icon: AppIcons.accountCircle,
			section: SettingsSection.ACCOUNT,
		},
		{
			label: loc.sGeneral,
			icon: AppIcons.settings,
			section: SettingsSection.GENERAL,
		},
		{
			label: loc.sNotifications,
			icon: AppIcons.notifications,
			section: SettingsSection.NOTIFICATIONS,
		},
		{
			label: loc.sPrivacy,
			icon: AppIcons.lockPerson,
			section: SettingsSection.PRIVACY,
		},
		{
			label: loc.sAbout,
			icon: AppIcons.info,
			section: SettingsSection.ABOUT,
		},
		{
			label: loc.sHelp,
			icon: AppIcons.help,
			section: SettingsSection.HELP,
		},
		{
			label: loc.sFeedback,
			icon: AppIcons.feedback,
			section: SettingsSection.FEEDBACK,
		},
	];
}
