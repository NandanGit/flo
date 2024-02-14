import { z } from 'zod';

const personSchema = z.object({
	id: z.string(),
	name: z.string(),
});

export type Person = z.infer<typeof personSchema>;

export default personSchema;
