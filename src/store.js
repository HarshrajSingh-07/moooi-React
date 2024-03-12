import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/Redux/features/cart/cartSlice.js';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});