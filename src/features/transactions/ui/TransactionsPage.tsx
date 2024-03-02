import { List, ListItem, ListItemText } from '@mui/material';
import RefreshHeader from '../../../shared/components/RefreshHeader/RefreshHeader';
import { AppPage } from '../../../shared/pages/AppPage';
import { useTransactionsPageView } from '../TransactionsPageView';
import useLoc from '../../../hooks/useLoc';

const TransactionsPage: React.FC = () => {
	const { transactionsStatus, transactions, loadTransactions } =
		useTransactionsPageView();
	const loc = useLoc();
	return (
		<AppPage title={loc.sTransactions}>
			<RefreshHeader
				title={loc.trRecentTransactions}
				dataStatus={transactionsStatus}
				onRefresh={loadTransactions}
			/>
			<List>
				{transactions.map((transaction) => (
					<ListItem key={transaction.id}>
						<ListItemText primary={transaction.title} />
					</ListItem>
				))}
			</List>
		</AppPage>
	);
};

export default TransactionsPage;
