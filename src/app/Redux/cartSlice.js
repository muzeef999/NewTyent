import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://tyent.co.in";

// Async thunks
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`${apiUrl}/api/cart/${userId}`);
      return response.data.cart; // Return the cart object
    } catch (error) {
      toast.error(error.response?.data || "Error fetching cart");
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error fetching cart"
      );
    }
  }
);

export const postCart = createAsyncThunk(
  "cart/postCart",
  async (cartData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/cart/${cartData.userId}`,
        cartData
      );
      toast.success("Product added to cart!");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Failed to add product to cart");
      return rejectWithValue(
        error.response?.data || "Failed to add product to cart"
      );
    }
  }
);

export const updateItemQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ userId, productName, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${apiUrl}/api/cart/${userId}`, {
        productName,
        quantity,
      });
      toast.success("Item quantity updated!");

      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Error updating item quantity");

      return rejectWithValue(
        error.response?.data || "Error updating item quantity"
      );
    }
  }
);

export const deleteProductAction = createAsyncThunk(
  "cart/delCart",
  async ({ userId, productName }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/cart/${userId}`, {
        data: { userId, productName },
      });
      toast.success("Product removed from cart!");

      return response.data;
    } catch (error) {
      toast.error(error.response?.data || "Failed to delete product from cart");

      return rejectWithValue(
        error.response?.data || "Failed to delete product from cart"
      );
    }
  }
);

// Initial State
const initialState = {
  products: [],
  userId: null,
  isFetching: false, // For global cart fetching
  loadingIds: {}, // For item-specific loading (e.g., updating/deleting)
  error: null,
  totalItems: 0,
  totalAmount: 0,
  deliverCharge: 10,
};

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.products = [];
      state.userId = null;
      state.isFetching = false;
      state.error = null;
    },
    setItemLoading: (state, action) => {
      state.loadingIds[action.payload] = true;
    },
    setUpdatingProduct: (state, action) => {
      state.updatingProduct = action.payload; // Store the product name or ID being updated
    },

    clearItemLoading: (state, action) => {
      delete state.loadingIds[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isFetching = false;
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
        state.isFetching = false;
        state.error = action.payload;
      })
      .addCase(postCart.fulfilled, (state, action) => {
        state.products.push(action.payload);
        calculateTotal(state);
      })
      .addCase(updateItemQuantity.pending, (state, action) => {
        state.loadingIds[action.meta.arg.productName] = true; // Specific product loading
      })
      .addCase(updateItemQuantity.fulfilled, (state, action) => {
        state.loadingIds = {};
        state.products = action.payload.cart.products;
        calculateTotal(state);
      })
      .addCase(updateItemQuantity.rejected, (state, action) => {
        state.loadingIds = {};
        state.error = action.payload;
      })
      .addCase(deleteProductAction.pending, (state, action) => {
        state.loadingIds[action.meta.arg.productName] = true;
      })
      .addCase(deleteProductAction.fulfilled, (state, action) => {
        state.loadingIds = {};
        state.products = action.payload.cart.products;
        calculateTotal(state);
      })
      .addCase(deleteProductAction.rejected, (state, action) => {
        state.loadingIds = {};
        state.error = action.payload;
      });
  },
});

// Helper function to calculate totals
const calculateTotal = (state) => {
  let totalAmount = 0;
  let totalItems = 0;

  state.products.forEach((product) => {
    totalAmount += product.price * product.quantity;
    totalItems += product.quantity;
  });

  state.totalAmount = totalAmount + state.deliverCharge;
  state.totalItems = totalItems;
};

// Selectors
export const selectTotalAmount = (state) => state.cart.totalAmount;
export const selectLoadingIds = (state) => state.cart.loadingIds;

// Actions
export const { clearCart, setItemLoading, clearItemLoading } =
  cartSlice.actions;
export default cartSlice.reducer;
