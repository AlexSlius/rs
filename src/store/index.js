import { configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper'

import { combinedReducers } from './root-reducer';

export const makeStore = () => configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  evdTools: true,
});

// export const wrapper = createWrapper(makeStore, { debug: true });
export const wrapper = createWrapper(makeStore);
