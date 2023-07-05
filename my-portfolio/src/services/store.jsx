//how redux/toolkit eased use of redux global state
import { configureStore } from '@reduxjs/toolkit';
import { myApi } from './custom.js';

export const store = configureStore({
	reducer: {
		[myApi.reducerPath]:  myApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		getDefaultMiddleware().concat(myApi)
	}
});