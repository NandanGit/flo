import { List, ListItem, ListItemText } from '@mui/material';
import RefreshHeader from '../../../shared/components/RefreshHeader/RefreshHeader';
import { useTransactionsPageView } from '../TransactionsPageView';
import useLoc from '../../../hooks/useLoc';
import { AppScreen } from '../../../shared/pages/AppScreen';

const TransactionsPage: React.FC = () => {
	const { transactionsStatus, transactions, loadTransactions } =
		useTransactionsPageView();
	const loc = useLoc();
	return (
		<AppScreen title={loc.sTransactions}>
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
		</AppScreen>
	);
};

export default TransactionsPage;
