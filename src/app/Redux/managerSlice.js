import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tyent.co.in';

const managersSlice = createSlice({
  name: 'managers',
  initialState: {
    managers: [],
    loading: true,
    error: null,
  },
  reducers: {
    setManagers(state, action) {
      state.managers = action.payload;
    },
    setLoadingManagers(state, action) {
      state.loading = action.payload;
    },
    setErrorManagers(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setManagers, setLoadingManagers, setErrorManagers } = managersSlice.actions;

export const fetchManagers = () => async (dispatch) => {
  try {
    dispatch(setLoadingManagers(true));
    const response = await axios.get(`${apiUrl}/api/auth/verifyOtp`);
    const managerList = response.data.users.filter(user => user.role === 'manager');
    dispatch(setManagers(managerList));
  } catch (error) {
    dispatch(setErrorManagers(error.message));
  } finally {
    dispatch(setLoadingManagers(false));
  }
};

export default managersSlice.reducer;
