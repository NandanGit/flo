import { z } from 'zod';
import { CustomZodSchemaOptionsBase } from './types';

interface ZodIdSchemaOptions extends CustomZodSchemaOptionsBase {
	prefix: string;
	// message?: string;
	whitelist?: string[];
}

export const zodIdSchema = ({
	prefix,
	message = 'Invalid ID',
	whitelist = [],
}: ZodIdSchemaOptions) => {
	return z.string().refine(
		(data) => {
			if (whitelist.includes(data)) return true;
			// 1. There should be 3 components to the id separated by a hyphen
			// 2. The first component should be the prefix
			// 3. The second component should be a UNIX timestamp
			// 4. The third component should be a random uppercase hex string
			const components = data.split('-');
			if (components.length !== 3) return false;
			if (components[0] !== prefix) return false;
			if (isNaN(Number(components[1]))) return false;
			if (!/^[A-F0-9]+$/.test(components[2])) return false;
			return true;
		},
		{
			message,
		}
	);
};

export const userIdSchema = zodIdSchema({
	prefix: 'U',
	message: 'Invalid user ID',
	whitelist: ['ADMIN'],
});

export const accountIdSchema = zodIdSchema({
	prefix: 'A',
	message: 'Invalid account ID',
});

export const personIdSchema = zodIdSchema({
	prefix: 'P',
	message: 'Invalid person ID',
	whitelist: ['SELF'],
});

export const merchantIdSchema = zodIdSchema({
	prefix: 'M',
	message: 'Invalid merchant ID',
});

export const transactionIdSchema = zodIdSchema({
	prefix: 'T',
	message: 'Invalid transaction ID',
});

export const categoryIdSchema = zodIdSchema({
	prefix: 'C',
	message: 'Invalid category ID',
});
