import { useCallback, useEffect } from 'react';
import { fetchTransactions } from '../slices/transactionsSlice';
import { useAppDispatch, useAppSelector } from './customReduxHooks';

const useTransactionsState = () => {
	const dispatch = useAppDispatch();
	const transactionsStatus = useAppSelector(
		(state) => state.transactions.status
	);
	const transactions = useAppSelector(
		(state) => state.transactions.transactions
	);

	const loadTransactions = useCallback(() => {
		console.debug('Loading transactions...');
		dispatch(fetchTransactions());
	}, [dispatch]);

	useEffect(() => {
		if (transactionsStatus === 'idle') {
			loadTransactions();
		}
	}, [transactionsStatus, dispatch, loadTransactions]);

	return {
		loadTransactions,
		transactionsStatus,
		transactions,
	};
};

export default useTransactionsState;
