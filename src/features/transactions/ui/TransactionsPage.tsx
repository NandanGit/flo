import { useEffect } from 'react';
import { useServices } from '../../../hooks/useServices';
import { AppPage } from '../../../shared/pages/AppPage';

const TransactionsPage: React.FC = () => {
	const { transactionsService } = useServices();

	useEffect(() => {
		let cancelled = false;
		console.clear();
		transactionsService.getTransactions().then((transaction) => {
			if (cancelled) return;
			console.log(
				'People:',
				transaction?.map((t) => t.title)
			);
		});

		return () => {
			cancelled = true;
		};
	}, [transactionsService]);

	return (
		<AppPage title='Transactions'>
			<h1>Transactions</h1>
		</AppPage>
	);
};

export default TransactionsPage;
