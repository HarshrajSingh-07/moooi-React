import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        existingItem.quantity++;
      } else {
        // If it's a new item, add it to the cart
        state.items.push({ ...newItem, quantity: 1 });
      }

      console.log("Current cart state:", state.items);
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.name !== itemIdToRemove);
    },
    
    // increaseQuantity:(state) => {
    //   state.quantity += 1;
    // },
    // decreaseQuantity: (state) => {
    //   if(state.quantity>0){
    //     state.quantity -= 1;
    //   }
    // }
    decreaseQuantity(state, action) {
      const itemName = action.payload;
      const itemToDecrease = state.items.find(item => item.name === itemName);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
      }
    },
    increaseQuantity(state, action) {
      const itemName = action.payload;
      const itemToIncrease = state.items.find(item => item.name === itemName);
      if (itemToIncrease) {
        itemToIncrease.quantity++;
      }
    },
  },
});

export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
