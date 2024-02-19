// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
// import peopleReducer from './slices/peopleSlice';
// import merchantsReducer from './slices/merchantsSlice';
// import transactionsReducer from './slices/transactionsSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		// people: peopleReducer,
		// merchants: merchantsReducer,
		// transactions: transactionsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
