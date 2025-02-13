import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

// ✅ Fetch User Address
export const getUserAddress = createAsyncThunk(
  "Shipping/fetchShipping",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/shipping/${userId}`);
      return data; // ✅ Ensure default value
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error fetching shipping";
      console.error("API Fetch Error:", errorMessage); // ✅ Log error message
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

const shippingSlice = createSlice({
  name: "shippingAddress",
  initialState: {
    shippingAddress: null, // ✅ Start with `null`
    pending: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAddress.pending, (state) => {
        state.pending = true;
        state.error = null;
        
      })
      .addCase(getUserAddress.fulfilled, (state, action) => {
        state.pending = false;
        state.shippingAddress = action.payload || {}; // ✅ Ensure default object
        
      })
      .addCase(getUserAddress.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
        
      });
  },
});

export default shippingSlice.reducer;
