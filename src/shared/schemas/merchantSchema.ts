import { z } from 'zod';
import zodId from './ZodId';

const merchantSchema = z.object({
	id: zodId('Invalid merchant id'),
	name: z.string(),
	website: z.string().url().optional(),
	logo: z.string().url().optional(),
	description: z.string().optional(),
	category: z.string().optional(),
});

export type Merchant = z.infer<typeof merchantSchema>;

export default merchantSchema;
