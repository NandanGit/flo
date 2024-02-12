import { AppActions } from '../../common/actions/AppActions';
import { Routes } from '../../common/navigation/AppRoutes';

export type MenuItemModel = {
	label: string;
	// icon?: string;
	route?: Routes;
	action?: AppActions;
};
