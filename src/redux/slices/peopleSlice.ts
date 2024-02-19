import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PeopleService } from '../../services/PeopleService';
import { AsyncThunkType } from '../asyncThunkType';
import { PeopleState } from './types/peopleState';

const peopleService = new PeopleService();

export const fetchPeople = createAsyncThunk(
	AsyncThunkType.fetchPeople,
	async () => {
		return await peopleService.getPeople();
	}
);

const initialState: PeopleState = {
	people: [],
	status: 'idle',
	error: undefined,
};

const peopleSlice = createSlice({
	name: 'people',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPeople.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchPeople.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.people = action.payload || state.people;
			})
			.addCase(fetchPeople.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default peopleSlice.reducer;
