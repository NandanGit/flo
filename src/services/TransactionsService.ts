import { APIConstants } from '../shared/constants/APIConstants';
import transactionSchema, {
	Transaction,
} from '../shared/schemas/transactionSchema';
import { APIResponse } from '../shared/types/api';
import { ExcludeId } from '../shared/types/common';
import { ApiService } from './ApiService';

export class TransactionsService extends ApiService<
	typeof transactionSchema,
	Transaction
> {
	constructor() {
		super(
			APIConstants.transactions,
			transactionSchema,
			APIConstants.defaultTransactionsPaginationOptions,
			(data) => ({
				...data,
				date: new Date(data.date as string),
			})
		);
	}

	getTransactionById = super.getById;

	getTransactions = super.get;

	search = super.search;

	addTransaction = async (transaction: ExcludeId<Transaction>) =>
		super.add<APIResponse<Transaction>>(transaction);

	// // TODO: Implement this in the backend
	// addTransactions = async (transactions: ExcludeId<Transaction>[]) =>
	// 	super.addMany<APIResponse<Transaction[]>>(transactions);

	updateTransaction = async (id: string, transaction: Partial<Transaction>) =>
		super.update<APIResponse<Transaction>>(id, transaction);

	removeTransaction = async (id: string) =>
		super.remove<APIResponse<Transaction>>(id);

	removeTransactions = async (ids: string[]) =>
		super.removeMany<APIResponse<Transaction[]>>(ids);
}
