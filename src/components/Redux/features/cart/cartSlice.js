// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        existingItem.quantity++;
        existingItem.price++; 
        // state.price+=state.price;
      } else {
        // If it's a new item, add it to the cart
        state.items.push({ ...newItem, quantity: 1 });
      }

      // state.items.push(newItem);
      // console.log("Current cart state:", state.items);
      
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;