import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TransactionsService } from '../../services/TransactionsService';
import { AsyncThunkType } from '../asyncThunkType';
import { TransactionsState } from './types/transactionsState';

const transactionsService = new TransactionsService();

export const fetchTransactions = createAsyncThunk(
	AsyncThunkType.fetchTransactions,
	async () => {
		return await transactionsService.getTransactions();
	}
);

const initialState: TransactionsState = {
	transactions: [],
	status: 'idle',
	error: undefined,
};

const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTransactions.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchTransactions.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.transactions = action.payload || state.transactions;
			})
			.addCase(fetchTransactions.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default transactionsSlice.reducer;
