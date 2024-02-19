import * as z from 'zod';

export type ZodObjectSchema = z.ZodObject<
	{
		id: z.ZodString;
	},
	'strip',
	z.ZodTypeAny,
	{
		id: string;
	},
	{
		id: string;
	}
>;
