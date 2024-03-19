import { SharedSchemaConstants } from './shared';

export class ProductSchemaConstants {
	public static readonly title = {
		MIN_LENGTH: 3,
		MAX_LENGTH: 50,
	} as const;

	public static readonly description = {
		MAX_LENGTH: 200,
	} as const;

	public static readonly tentativeAmount = {
		MIN: 0,
		MAX: 99_00_000,
	} as const;

	public static readonly ICONS = SharedSchemaConstants.ICONS;

	// public static readonly TYPES = ['PRODUCT', 'SERVICE'] as const;

	public static readonly errors = {};
}
