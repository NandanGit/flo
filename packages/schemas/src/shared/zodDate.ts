import { z } from 'zod';
import { CustomZodSchemaOptionsBase } from './types';

interface ZodDateSchemaOptions extends CustomZodSchemaOptionsBase {
	allowFuture?: boolean;
}

export const zodDateSchema = ({
	message = 'Invalid date',
	allowFuture = false,
}: ZodDateSchemaOptions = {}) => {
	return z
		.string()
		.refine(
			(val) => {
				return !isNaN(new Date(val).getTime());
			},
			{
				message,
			}
		)
		.transform((val) => new Date(val))
		.refine(
			(val) => {
				if (allowFuture) return true;
				return val <= new Date();
			},
			{
				message: 'Date should not be in the future',
			}
		);
};
