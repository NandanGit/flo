import { AppIcons } from '../../Icon';

export interface BaseMenuItemModel {
	label: string;
	icon?: AppIcons;

	unseen?: boolean;
	unseenCount?: number;
}
