import useTransactionsState from '../../redux/hooks/useTransactionsState';

export const useTransactionsPageView = () => {
	const { transactionsStatus, transactions, loadTransactions } =
		useTransactionsState();

	return {
		transactionsStatus,
		transactionsAreLoading: transactionsStatus === 'loading',
		transactions,
		loadTransactions,
	};
};
