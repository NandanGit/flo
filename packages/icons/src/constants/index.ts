import { CUSTOM_ICONS } from './custom';
import { HUGEICONS } from './hugeicons';

export const FLO_ICONS = [...CUSTOM_ICONS, ...HUGEICONS] as const;
export type FloIcon = (typeof FLO_ICONS)[number];
