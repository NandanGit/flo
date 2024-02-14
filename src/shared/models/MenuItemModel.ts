import { AppActions } from '../../common/actions/AppActions';
import { Routes } from '../../common/navigation/AppRoutes';
import { AppIcons } from '../Icon';

export type MenuItemModel = {
	label: string;
	icon?: AppIcons;
	route?: Routes;
	action?: AppActions;
};
