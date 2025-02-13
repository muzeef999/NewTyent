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

// ✅ Save User Address
export const saveUserAddress = createAsyncThunk(
  "Shipping/saveShipping",
  async ({ userId, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/shipping", {
        _id: userId,
        addresses: [formData],
      });

      if (response.status === 200) {
        toast.success("Address saved successfully!");
        return formData;
      } else {
        return rejectWithValue("Error saving shipping address");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      return rejectWithValue(error.message);
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
  reducers: {},
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
      })
      .addCase(saveUserAddress.pending, (state) => {
        state.pending = true;
      })
      .addCase(saveUserAddress.fulfilled, (state, action) => {
        state.pending = false;
        state.shippingAddress = action.payload;
      })
      .addCase(saveUserAddress.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      });
  },
});

export default shippingSlice.reducer;
