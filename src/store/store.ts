import { albumsApi } from './api/albumsApi';
import { firebaseApi } from './api/firebaseApi';
import { identityApi } from './api/identityApi';
import { userStore } from './slices/user.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  [albumsApi.reducerPath]: albumsApi.reducer,
  [firebaseApi.reducerPath]: firebaseApi.reducer,
  [identityApi.reducerPath]: identityApi.reducer,
  [userStore.name]: userStore.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof generateStore>;
export type AppDispatch = AppStore['dispatch'];

export const generateStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([albumsApi.middleware, firebaseApi.middleware, identityApi.middleware]),
  });

const makeStore = () => generateStore();

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
