import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; 
import cartReducer from "./cartSlice"; // Import your cart slice
import leadsReducer from "./leadSlice"
import managersReducer from "./managerSlice"
import  ShippingReducer  from "./shippingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add your auth reducer here
    cart: cartReducer, // Add your cart reducer here
    leads: leadsReducer,
    managers: managersReducer,
    shippingAddress: ShippingReducer,
  },
});
