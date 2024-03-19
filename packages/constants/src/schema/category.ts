import { SharedSchemaConstants } from './shared';

export class CategorySchemaConstants {
	// Limits
	public static readonly title = {
		MIN_LENGTH: 3,
		MAX_LENGTH: 20,
	} as const;

	// Types
	public static readonly TYPES = SharedSchemaConstants.TRANSACTION_TYPES;

	public static readonly ICONS = SharedSchemaConstants.ICONS;

	public static readonly COLORS = SharedSchemaConstants.COLORS;

	// Errors
	public static readonly errors = {};
}
