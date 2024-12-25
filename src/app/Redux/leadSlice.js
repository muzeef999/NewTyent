import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tyent.co.in';

export const fetchLeads = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`${apiUrl}/api/lead`);

    // Define the status categories for filtering
    const statusCategories = [
      "New",
      "Contacted & Send Details",
      "Under Follow for Demo",
      "Demo Done - Closure Follow-Up",
      "Required Time",
      "Not Interested",
      "Installed",
    ];

    // Filter the leads based on the status categories
    const filteredLeads = response.data.filter((lead) =>
      statusCategories.includes(lead.status)
    );

    dispatch(setLeads(response.data)); // Update Redux store with all fetched leads
    dispatch(setFilteredLeads(filteredLeads)); // Update Redux store with filtered leads based on status
  } catch (error) {
    dispatch(setError(error.message)); // Handle error if the request fails
  } finally {
    dispatch(setLoading(false)); // Set loading to false once the request is complete
  }
};


export const updateLead = (leadId, updateData) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    console.log(leadId)
    console.log(updateData.assignedTo);
    const response = await axios.put(`${apiUrl}/api/lead`, {
      leadId,
      assignedTo: updateData.assignedTo,
      status: updateData.status,
    });

    console.log("Update Response: ", response.data);

    // Get the current leads from the store
    const { leads } = getState().leads;

    // Update the lead in the local Redux state
    const updatedLeads = leads.map((lead) =>
      lead._id === leadId
        ? { ...lead, assignedTo: updateData.assignedTo, status: updateData.status }
        : lead
    );

    // Dispatch the action to update leads in the Redux state
    dispatch(setLeads(updatedLeads));
    dispatch(setFilteredLeads(updatedLeads));

  } catch (error) {
    console.error("Error updating lead:", error.message);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false)); 
  }
};


export const handleDeleteLead = (leadId) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/api/lead/${leadId}`);
    dispatch(deleteLead(leadId));  // Remove lead from Redux store
  } catch (error) {
    console.error("Error deleting lead:", error.message);
    dispatch(setError("Failed to delete lead"));
  }
};

const leadsSlice = createSlice({
  name: 'leads',
  initialState: {
    leads: [],
    filteredLeads: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLeads(state, action) {
      state.leads = action.payload;
      state.filteredLeads = action.payload;
    },
    setFilteredLeads(state, action) {
      state.filteredLeads = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    deleteLead: (state, action) => {
      const leadId = action.payload;
      state.leads = state.leads.filter(lead => lead._id !== leadId);
      state.filteredLeads = state.filteredLeads.filter(lead => lead._id !== leadId);
    }
  },
});

export const { setLeads, setFilteredLeads, setLoading, setError, deleteLead  } = leadsSlice.actions;

export default leadsSlice.reducer;
