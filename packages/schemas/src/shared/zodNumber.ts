import { z } from 'zod';
import { CustomZodSchemaOptionsBase } from './types';
import { FloConstants } from '@flo.app/constants';

interface ZodNumberSchemaOptions extends CustomZodSchemaOptionsBase {
	fieldName: string;

	min?: number;
	max?: number;
	errors?: {
		min?: string;
		max?: string;
	};
}

export const zodNumberSchema = ({
	min = 0,
	max = FloConstants.schema.shared.LIMITS.MAX_NUMBER,
	errors = {},
	fieldName,
}: ZodNumberSchemaOptions) => {
	return z
		.number()
		.min(min, {
			message: errors.min || `${fieldName} should be at least ${min}`,
		})
		.max(max, {
			message: errors.max || `${fieldName} should be at most ${max}`,
		});
};
