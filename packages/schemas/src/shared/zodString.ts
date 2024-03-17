import { z } from 'zod';
import { CustomZodSchemaOptionsBase } from './types';
import { FloConstants } from '@flo.app/constants';

interface ZodStringSchemaOptions extends CustomZodSchemaOptionsBase {
	fieldName: string;

	minLength?: number;
	maxLength?: number;
	pattern?: RegExp;
	errors?: {
		minLength?: string;
		maxLength?: string;
		pattern?: string;
	};
}

export const zodStringSchema = ({
	minLength = 0,
	maxLength = FloConstants.schema.shared.LIMITS.MAX_STRING_LENGTH,
	pattern,
	errors = {},
	fieldName,
}: ZodStringSchemaOptions) => {
	return z
		.string()
		.min(minLength, {
			message:
				errors.minLength ||
				`${fieldName} should be at least ${minLength} characters long`,
		})
		.max(maxLength, {
			message:
				errors.maxLength ||
				`${fieldName} should be at most ${maxLength} characters long`,
		})
		.refine(
			(val) => {
				if (pattern) {
					return pattern.test(val);
				}
				return true;
			},
			{
				message: errors.pattern || `Invalid ${fieldName}`,
			}
		);
};
