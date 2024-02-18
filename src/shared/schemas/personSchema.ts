import { z } from 'zod';
import zodId from './ZodId';

const personSchema = z.object({
	id: zodId('Invalid person id'),
	name: z.string(),
	avatar: z.string().url().optional(),
});

export type Person = z.infer<typeof personSchema>;

export default personSchema;
