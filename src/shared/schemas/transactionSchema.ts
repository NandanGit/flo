import { z } from 'zod';
import { AppConstants } from '../constants/AppConstants';
import zodId from './ZodId';

const transactionSchema = z.object({
	id: zodId('Invalid transaction id'),
	title: z.string(),
	description: z.string().optional(),
	amount: z.number().min(0, 'Amount must be greater than 0'),
	currency: z.enum(AppConstants.availableCurrencies),
	type: z.enum(AppConstants.transactionTypes),
	recipientType: z.enum(AppConstants.transactionRecipientTypes),
	status: z.enum(AppConstants.transactionStatuses),
	mode: z.enum(AppConstants.transactionModes),
	categories: z.array(z.enum(AppConstants.transactionCategories)),
	timestamp: z
		.number()
		.min(0)
		.max(Date.now(), 'Invalid date: transaction timestamp must be in the past')
		.or(z.date()),
	from: z.string(),
	to: z.string(),
});

export type Transaction = z.infer<typeof transactionSchema>;

export default transactionSchema;
