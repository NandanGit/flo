import { SharedSchemaConstants } from './shared';

export class CategorySchemaConstants {
	// Limits
	public static readonly title = {
		MIN_LENGTH: 3,
		MAX_LENGTH: 20,
	} as const;

	// Types
	public static readonly TYPES = SharedSchemaConstants.TRANSACTION_TYPES;

	public static readonly ICONS = [
		'HOME',
		'SHOPPING',
		'FOOD',
		'TRANSPORT',
		'HEALTH',
		'ENTERTAINMENT',
		'BILLS',
		'EDUCATION',
		'OTHERS',
	] as const;

	public static readonly COLORS = SharedSchemaConstants.COLORS;

	// Errors
	public static readonly errors = {};
}
