import { List, ListItem, ListItemText } from '@mui/material';
import RefreshHeader from '../../../shared/components/RefreshHeader/RefreshHeader';
import { AppPage } from '../../../shared/pages/AppPage';
import { useTransactionsPageView } from '../TransactionsPageView';

const TransactionsPage: React.FC = () => {
	const { transactionsStatus, transactions, loadTransactions } =
		useTransactionsPageView();
	return (
		<AppPage title='Transactions'>
			<RefreshHeader
				title='Recent Transactions'
				dataStatus={transactionsStatus}
				onRefresh={loadTransactions}
			/>
			<List>
				{transactions.map((transaction) => (
					<ListItem key={transaction.id}>
						<ListItemText
							primary={transaction.title}
							// style={{ border: '1px solid teal' }}
						/>
					</ListItem>
				))}
			</List>
		</AppPage>
	);
};

export default TransactionsPage;
