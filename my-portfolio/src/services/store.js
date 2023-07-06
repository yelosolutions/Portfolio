//how redux/toolkit eased the use of redux global state
import { configureStore } from '@reduxjs/toolkit';
import { myApi } from './custom';

export const store = configureStore({
	reducer: {
		[myApi.reducerPath]:  myApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myApi.middleware)
});