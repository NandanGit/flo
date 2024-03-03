import { SettingsSection } from '../../../features/user/settings/model/SettingsSection';
import { BaseMenuItemModel } from './BaseMenuItemModel';

export interface SettingsMenuItemModel extends BaseMenuItemModel {
	section: SettingsSection;
}
