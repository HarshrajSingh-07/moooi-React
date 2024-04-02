// File: store.js

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import cartReducer from './components/Redux/features/cart/cartSlice';
import persistConfig from './reduxPersistConfig';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,  
});

export const persistor = persistStore(store);
