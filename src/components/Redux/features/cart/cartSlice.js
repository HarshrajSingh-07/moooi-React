import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    wishlist: [],
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
    },
    removeFromCart: (state, action) => {
      const itemNameToRemove = action.payload;
      const itemToRemove = state.items.find(
        (item) => item.name === itemNameToRemove
      );

      if (itemToRemove) {
        state.items = state.items.filter(
          (item) => item.name !== itemNameToRemove
        );
      }
    },
    decreaseQuantity: (state, action) => {
      const itemName = action.payload;
      const itemToDecrease = state.items.find((item) => item.name === itemName);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
      }
    },
    increaseQuantity: (state, action) => {
      const itemName = action.payload;
      const itemToIncrease = state.items.find((item) => item.name === itemName);
      if (itemToIncrease) {
        itemToIncrease.quantity++;
      }
    },
    totalPriceHandler: (state, action) => {
      state.totalPrice = action.payload;
    },
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      state.wishlist.push({ ...newItem });
    },
    removeFromWishlist: (state, action) => {
      const itemNameToRemove = action.payload;
      state.wishlist = state.wishlist.filter(
        (item) => item.name !== itemNameToRemove
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  totalPriceHandler,
  addToWishlist,
  removeFromWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;
