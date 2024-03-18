import { SharedSchemaConstants } from './shared';
import { FLO_ICONS } from '@flo.app/icons';

export class PaymentProcessorSchemaConstants {
	// Limits
	public static readonly title = {
		MIN_LENGTH: 3,
		MAX_LENGTH: 20,
	} as const;

	// Types
	public static readonly ICONS = FLO_ICONS;

	public static readonly SUPPORTED_MODES = SharedSchemaConstants.PAYMENT_MODES;

	// Errors
	public static readonly errors = {
		MIN_ONE_SUPPORTED_MODE: 'At least one supported payment mode is required',
	};
}
