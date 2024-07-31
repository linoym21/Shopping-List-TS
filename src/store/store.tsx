import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../features/listSlice';

export const store = configureStore({
    reducer: listReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
