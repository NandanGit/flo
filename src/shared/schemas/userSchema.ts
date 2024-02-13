import { z } from 'zod';
import { AppConstants } from '../constants/AppConstants';

const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string().email(),
	phone: z.string().min(10).max(10),
	preferredCurrency: z.enum(AppConstants.availableCurrencies),
	avatar: z.string().url(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type User = z.infer<typeof userSchema>;

export default userSchema;
