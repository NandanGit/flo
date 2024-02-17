import { z } from 'zod';
import { AppConstants } from '../constants/AppConstants';
import zodId from './ZodId';

const transactionSchema = z.object({
	id: zodId('Invalid transaction id'),
	title: z.string(),
	description: z.string().optional(),
	amount: z.number().min(0),
	currency: z.enum(AppConstants.availableCurrencies),
	type: z.enum(AppConstants.transactionTypes),
	date: z.date(),
});

export type Transaction = z.infer<typeof transactionSchema>;

export default transactionSchema;
