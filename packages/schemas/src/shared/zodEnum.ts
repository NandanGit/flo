import { z } from 'zod';
import { CustomZodSchemaOptionsBase } from './types';

interface ZodEnumSchemaOptions extends CustomZodSchemaOptionsBase {
	fieldName: string;
}

export const zodEnumSchema = <T extends readonly [string, ...string[]]>(
	values: T,
	{ message, fieldName }: ZodEnumSchemaOptions
) => {
	return z.enum(values, {
		invalid_type_error:
			message ||
			(`Invalid ${fieldName}` + (values.length < 4)
				? `; should be one of ${values.join(', ')}`
				: ''),
	});
};
