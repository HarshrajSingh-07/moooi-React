import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      // state.totalPrice += newItem.price;
    },
    removeFromCart: (state, action) => {
      const itemNameToRemove = action.payload;
      const itemToRemove = state.items.find(
        (item) => item.name === itemNameToRemove
      );

      if (itemToRemove) {
        // state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter(
          (item) => item.name !== itemNameToRemove
        );
      }
    },
    decreaseQuantity: (state, action) => {
      const itemName = action.payload;
      const itemToDecrease = state.items.find(
        (item) => item.name === itemName
      );
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
        // state.totalPrice -= itemToDecrease.price; // Adjust total price
      }
    },
    increaseQuantity: (state, action) => {
      const itemName = action.payload;
      const itemToIncrease = state.items.find(
        (item) => item.name === itemName
      );
      if (itemToIncrease) {
        itemToIncrease.quantity++;
        // state.totalPrice += itemToIncrease.price; // Adjust total price
      }
    },
    totalPriceHandler:(state,action)=>{
      state.totalPrice=action.payload
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  totalPriceHandler
} = cartSlice.actions;

export default cartSlice.reducer;
