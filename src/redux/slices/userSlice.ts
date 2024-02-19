// src/redux/slices/userSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserService } from '../../services/UserService';
import { UserState } from './types/userState';
import { AsyncThunkType } from '../asyncThunkType';

const userService = new UserService();

export const fetchUserProfile = createAsyncThunk(
	AsyncThunkType.fetchUserProfile,
	async () => {
		return await userService.getProfile();
	}
);

const initialState: UserState = {
	profile: null,
	status: 'idle',
	error: undefined,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserProfile.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchUserProfile.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.profile = action.payload;
			})
			.addCase(fetchUserProfile.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default userSlice.reducer;
