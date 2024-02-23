import useTransactionsState from '../../redux/hooks/useTransactionsState';
import { useState } from 'react';
import { DataView } from '../../shared/types/ui';

export const useTransactionsPageView = () => {
	const { transactionsStatus, transactions, loadTransactions } =
		useTransactionsState();
	const [dataView, setDataView] = useState<DataView>(DataView.table);

	const onDataViewChange = (newView: DataView) => {
		setDataView(newView);
	};

	return {
		transactionsStatus,
		transactionsAreLoading: transactionsStatus === 'loading',
		transactions,
		loadTransactions,
		dataView,
		onDataViewChange,
	};
};
