import { CUSTOM_ICONS } from './custom';
import { HUGE_ICONS } from './huge-icons';

export const FLO_ICONS = [...CUSTOM_ICONS, ...HUGE_ICONS] as const;
export type FloIcon = (typeof FLO_ICONS)[number];
