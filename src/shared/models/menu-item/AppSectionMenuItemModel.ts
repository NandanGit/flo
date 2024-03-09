import { Routes } from '../../../common/navigation/AppRoutes';
import { AppSection } from '../../enums/AppSection';
import { BaseMenuItemModel } from './BaseMenuItemModel';

export interface AppSectionMenuItemModel extends BaseMenuItemModel {
	route: Routes;
	section: AppSection;
}
