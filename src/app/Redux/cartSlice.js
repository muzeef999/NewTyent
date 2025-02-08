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
      if (error.message === "Network Error") {
        toast.error("No internet connection. Please check your network.");
        return thunkAPI.rejectWithValue("No internet connection.");
      }
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
  totalAmount: 0,
  totalItems: 0,
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
      calculateTotal(state);
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
  addToCart: (state, action) => {
    const existingProduct = state.products.find(
      (product) => product.id === action.payload.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity
    } else {
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
    }

    calculateTotal(state); // Recalculate after adding product
  },
  updateQuantity: (state, action) => {
    const { id, quantity } = action.payload;
    state.products = state.products.map((product) =>
      product.id === id ? { ...product, quantity } : product
    );

    calculateTotal(state); // Recalculate after updating quantity
  },
  removeFromCart: (state, action) => {
    state.products = state.products.filter(
      (product) => product.id !== action.payload
    );

    calculateTotal(state); // Recalculate after removing product
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
      state.products = action.payload?.products || [];
      state.userId = action.payload?.userId || null;
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
    .addCase(updateItemQuantity.fulfilled, (state, action) => {
      state.products = action.payload.cart.products;
      calculateTotal(state);
    })
    .addCase(deleteProductAction.fulfilled, (state, action) => {
      state.products = action.payload.cart.products;
      calculateTotal(state);
    });
  },
  },);

// Helper function to calculate totals
const calculateTotal = (state) => {
  let totalAmount = 0;
  let totalItems = 0;

  state.products.forEach((product) => {
    totalAmount += (product.price ||0)* (product.quantity || 0);
    totalItems += product.quantity || 0;
  });

  state.totalAmount = totalAmount + (state.deliverCharge || 0);
  state.totalItems = totalItems;
};

// Selectors
export const selectTotalAmount = (state) => state.cart.totalAmount;
export const selectLoadingIds = (state) => state.cart.loadingIds;

// Actions
export const { clearCart, setItemLoading, clearItemLoading } =
  cartSlice.actions;
export default cartSlice.reducer;
