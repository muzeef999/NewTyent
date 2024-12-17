import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import your auth slice
import cartReducer from "./cartSlice"; // Import your cart slice

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add your auth reducer here
    cart: cartReducer, // Add your cart reducer here
  },
});
