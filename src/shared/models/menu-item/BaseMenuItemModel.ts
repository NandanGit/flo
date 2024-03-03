import { AppIcons } from '../../Icon';

export interface BaseMenuItemModel {
	label: string;
	icon?: AppIcons;
	iconElement?: JSX.Element;

	unseen?: boolean;
	unseenCount?: number;
}
