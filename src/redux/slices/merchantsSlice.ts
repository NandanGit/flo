import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MerchantsService } from '../../services/MerchantsService';
import { AsyncThunkType } from '../asyncThunkType';
import { MerchantsState } from './types/merchantsState';

const merchantsService = new MerchantsService();

export const fetchMerchants = createAsyncThunk(
	AsyncThunkType.fetchMerchants,
	async () => {
		return await merchantsService.getMerchants();
	}
);

const initialState: MerchantsState = {
	merchants: [],
	status: 'idle',
	error: undefined,
};

const merchantsSlice = createSlice({
	name: 'merchants',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMerchants.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchMerchants.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.merchants = action.payload || state.merchants;
			})
			.addCase(fetchMerchants.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default merchantsSlice.reducer;
