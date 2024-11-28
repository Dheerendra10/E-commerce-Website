// src/features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.id !== itemId);

      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        item.quantity = quantity;
        state.totalPrice = state.cartItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
