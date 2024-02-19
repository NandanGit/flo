import { Transaction } from '../../../shared/schemas/transactionSchema';
import { ReduxState } from './common';

export type TransactionsState = ReduxState<{
	transactions: Transaction[];
}>;
