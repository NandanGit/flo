import { z } from 'zod';
import { AppConstants } from '../constants/AppConstants';
import zodId from './ZodId';

const userSchema = z.object({
	id: zodId('Invalid user id'),
	name: z.string(),
	email: z.string().email(),
	phone: z.string().min(10).max(10),
	preferredCurrency: z.enum(AppConstants.availableCurrencies),
	avatar: z.string().url(),
	createdAt: z.number().min(0).max(Date.now()).or(z.date()),
	updatedAt: z.number().min(0).max(Date.now()).or(z.date()),
});

export type User = z.infer<typeof userSchema>;

export default userSchema;
