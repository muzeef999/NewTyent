// Redux Slice - cartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tyent.co.in'; // Fallback URL


// Async thunks
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`${apiUrl}/api/cart/${userId}`);
      return response.data.cart; // Return the cart object
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error fetching cart");
    }
  }
);


export const postCart = createAsyncThunk(
  "cart/postCart",
  async (cartData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/api/cart/${cartData.userId}`, cartData);
      console.log("Product added to cart successfully");
      return response.data;
    } catch (error) {
      console.error("Error adding product to cart:", error);
      return rejectWithValue(error.response?.data || "Failed to add product to cart");
    }
  }
);


export const updateItemQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ userId, productName, quantity }, thunkAPI) => {
    try {
      const response = await axios.put(`${apiUrl}/api/cart/${userId}`, {
        productName,
        quantity,
      });
      return response.data; // Return the updated cart
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error updating item quantity");
    }
  }
);

export const deleteProductAction = createAsyncThunk(
  "cart/delCart",
  async (cartData, { rejectWithValue }) => {
    try {
      // Send userId and productName as query parameters in the URL
      const response = await axios.delete(`${apiUrl}/api/cart/${cartData.userId}`, {
        data: {userId:cartData.userId, productName: cartData.productName } // Send data in the request body
      });
      console.log("Deleted product successfully");
      return response.data; // Return the deleted productId
    } catch (error) {
      console.error("Error deleting product from cart:", error);
      return rejectWithValue(error.response?.data || "Failed to delete product from cart");
    }
  }
);




const initialState = {
  products: [],  
  userId: null,
  loading: true,
  error: null,
  totalItems: 0,
  totalAmount: 0,
  deliverCharge: 10,
  shippingAddress: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.products = [];
      state.userId = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
         
        if (action.payload && action.payload.products) {
          state.products = action.payload.products;
          state.userId = action.payload.userId;  
        } else {
          state.products = [];
          state.userId = null;
        }
        calculateTotal(state);  
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCart.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
        calculateTotal(state);
      })
      .addCase(postCart.rejected, (state) => {
        state.loading = false;
      })
       .addCase(updateItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.cart.products;
        calculateTotal(state);  // Recalculate the total after updating the quantity
      })
      .addCase(updateItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteProductAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProductAction.fulfilled, (state, action) => {
        state.loading = false;
        
        console.log("Before update, current state.products:", state.products);
        console.log("Action payload:", action.payload);
      
        if (action.payload.cart && Array.isArray(action.payload.cart.products)) {
          state.products = action.payload.cart.products; // Correctly set the products array from the payload
        } else {
          console.error("Error: No products in payload or invalid structure", action.payload);
        }
      
        console.log("After update, current state.products:", state.products);
      
        calculateTotal(state);
      })
      
      .addCase(deleteProductAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });      
  },
});

const calculateTotal = (state) => {
  let totalAmount = 0;
  let totalItems = 0;

  // Iterate over the products array to calculate the total amount and total items
  state.products.forEach((product) => {
    totalAmount += product.price * product.quantity; // Total price calculation
    totalItems += product.quantity; // Total quantity of items
  });

  // Add delivery charge to the total amount
  state.totalAmount = totalAmount + state.deliverCharge;
  state.totalItems = totalItems; // Update totalItems count
};


export const selectTotalAmount = (state) => state.cart.totalAmount;

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
