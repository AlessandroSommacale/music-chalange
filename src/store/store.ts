import { albumsApi } from './albumsApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  [albumsApi.reducerPath]: albumsApi.reducer,
});

export const generateStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(albumsApi.middleware),
  });

export type AppStore = ReturnType<typeof generateStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(generateStore, { debug: true });
