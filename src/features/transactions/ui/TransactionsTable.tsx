/**
 * @file This file contains the transactions table component.
 * @summary This component is responsible for rendering the transactions table. It receives the transactions from the parent component and renders them in a table. It uses `DataGrid` from `@mui/x-data-grid` to render the transactions.
 */

import React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Transaction } from '../../../shared/schemas/transactionSchema';

export interface TransactionsTableProps {
	transactions: Transaction[];
}

const columns: GridColDef[] = [
	// { field: 'id', headerName: 'ID', width: 100 },
	{ field: 'title', headerName: 'Name', width: 200 },
	{ field: 'amount', headerName: 'Amount', width: 100 },
	{
		field: 'date',
		headerName: 'Date',
		width: 200,
		renderCell: (params) => {
			// console.log(params);
			const transaction = params.row as Transaction;
			return new Date(transaction.timestamp).toLocaleDateString('en-IN', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			});
		},
	},
];

export const TransactionsTable: React.FC<TransactionsTableProps> = ({
	transactions,
}) => {
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={transactions}
				columns={columns}
				// checkboxSelection
				slots={{
					noRowsOverlay: () => (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100%',
							}}
						>
							No transactions found
						</div>
					),
				}}
			/>
		</div>
	);
};
