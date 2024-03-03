import { AppActions } from '../../../common/actions/AppActions';
import { Routes } from '../../../common/navigation/AppRoutes';
import { BaseMenuItemModel } from './BaseMenuItemModel';

export interface AppDrawerMenuItemModel extends BaseMenuItemModel {
	route?: Routes;
	action?: AppActions;
}
