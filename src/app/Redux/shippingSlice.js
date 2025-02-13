import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

// ✅ Fetch User Address
export const getUserAddress = createAsyncThunk(
  "Shipping/fetchShipping",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/shipping/${userId}`);
      return response.data.shippingDetails; 
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error fetching shipping details";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage); 
    }
  }
);

// ✅ Initial State
const initialState = {
  shippingAddress: null, 
  pending: false,
  error: null,
};

// ✅ Redux Slice
const shippingSlice = createSlice({
  name: "shippingAddress",
  initialState,
  reducers: {}, // ✅ No direct reducers needed
  extraReducers: (builder) => {
    builder
      .addCase(getUserAddress.pending, (state) => {
        state.pending = true;
        state.error = null;
      })
      .addCase(getUserAddress.fulfilled, (state, action) => {
        state.pending = false;
        state.shippingAddress = action.payload || {}; 
      })
      .addCase(getUserAddress.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      });
  },
});

export default shippingSlice.reducer;
