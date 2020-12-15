import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactReducer, loading } from './contacts/contactsReducer';
import filter from './filter/filterReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authReducers';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = {
  auth: persistedReducer,
  contacts: contactReducer,
  filter,
  loading,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export const persistor = persistStore(store);
