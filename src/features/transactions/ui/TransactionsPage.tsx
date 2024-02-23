import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import RefreshHeader from '../../../shared/components/RefreshHeader/RefreshHeader';
import { AppPage } from '../../../shared/pages/AppPage';
import { useTransactionsPageView } from '../TransactionsPageView';
import { TransactionsTable } from './TransactionsTable';
import { AppIcon, AppIcons } from '../../../shared/Icon';
import { DataView } from '../../../shared/types/ui';

const dataViewOptions = [
	{
		view: DataView.table,
		icon: AppIcons.tableRows,
	},
	{
		view: DataView.grid,
		icon: AppIcons.viewModule,
	},
];

const TransactionsPage: React.FC = () => {
	const {
		transactionsStatus,
		transactions,
		loadTransactions,
		dataView,
		onDataViewChange,
	} = useTransactionsPageView();
	// console.log(transactions);

	return (
		<AppPage title='Transactions'>
			<RefreshHeader
				title='Recent Transactions'
				dataStatus={transactionsStatus}
				onRefresh={loadTransactions}
				actions={[
					<ToggleButtonGroup
						value={dataView}
						exclusive
						onChange={(_, newView) => {
							onDataViewChange(newView);
						}}
						aria-label='data-view-options'
						//
					>
						{dataViewOptions.map((option) => (
							<ToggleButton value={option.view} key={option.view}>
								{AppIcon(option.icon, {
									style: {
										// transform: 'scale(0.6)',
										fontSize: '1.2rem',
									},
								})}
							</ToggleButton>
						))}
					</ToggleButtonGroup>,
				]}
			/>
			<TransactionsTable transactions={transactions} />
		</AppPage>
	);
};

export default TransactionsPage;
