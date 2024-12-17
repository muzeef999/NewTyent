// Redux Slice - cartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "/api/cart"; // Adjust the base URL as needed

// Async thunks
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${userId}`);
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
      const response = await axios.post(`/api/cart/${cartData.userId}`, cartData);
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
      const response = await axios.put(`${API_BASE_URL}/${userId}`, {
        productName,
        quantity,
      });
      return response.data.cart; // Return the updated cart
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error updating item quantity");
    }
  }
);

const initialState = {
  products: [],  // Rename `cartItems` to `products` for consistency
  userId: null,
  loading: false,
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
        state.products = action.payload.products;
        state.userId = action.payload.userId;
        calculateTotal(state);  // Calculate the total after the cart is fetched
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
        state.cartItems.push(action.payload);
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
        state.products = action.payload.products;
        calculateTotal(state);  // Recalculate the total after updating the quantity
      })
      .addCase(updateItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Helper function to calculate total amount and total items
const calculateTotal = (state) => {
  let totalAmount = 0;
  let totalItems = 0;
  state.products.forEach((product) => {
    if (Array.isArray(product.price)) {
      totalAmount += product.price.reduce((cartTotal, cartItem) => cartTotal + cartItem, 0);
    } else {
      totalAmount += product.price * product.quantity;
    }
    totalItems += product.quantity;
  });

  // Update the state with the calculated values
  state.totalAmount = totalAmount + state.deliverCharge; // Add delivery charge to total amount
  state.totalItems = totalItems;
};

export const selectTotalAmount = (state) => state.cart.totalAmount;

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
