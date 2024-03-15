// File: reduxPersistConfig.js

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // Specify the reducers you want to persist here
};

export default persistConfig;
