import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tyent.co.in';

// Fetch Leads
export const fetchLeads = (userRole, username) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`strokeWidth/api/lead`);

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

    const allLeads = response.data;
    const filteredLeads = allLeads.filter((lead) => statusCategories.includes(lead.status));

    let roleBasedLeads = [];

    if (userRole === "admin") {
      roleBasedLeads = allLeads;
    } else if (userRole === "manager") {
      roleBasedLeads = allLeads.filter((lead) => lead.assignedTo === username);
    }

    dispatch(setLeads(roleBasedLeads)); 
    dispatch(setFilteredLeads(filteredLeads)); 
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Update Lead with Smooth UI
export const updateLead = (updateData) => async (dispatch, getState) => {
  // Optimistic UI update: Update Redux Store before API call
  const { leads } = getState().leads;

  const updatedLeads = leads.map((lead) =>
    lead._id === updateData.id
      ? { ...lead, assignedTo: updateData.assignedTo, status: updateData.status }
      : lead
  );

  dispatch(setLeads(updatedLeads)); // Update UI instantly
  dispatch(setLoading(true));

  try {
    await axios.put(`strokeWidth/api/lead`, {
      leadId: updateData.id,
      assignedTo: updateData.assignedTo,
      status: updateData.status,
    });

    // Re-filter leads after update
    const statusCategories = [
      "New", "Contacted & Send Details", "Under Follow for Demo",
      "Demo Done - Closure Follow-Up", "Required Time", "Not Interested", "Installed"
    ];

    const filteredLeads = updatedLeads.filter((lead) => statusCategories.includes(lead.status));
    dispatch(setFilteredLeads(filteredLeads));

  } catch (error) {
    console.error("Error updating lead:", error.message);
    dispatch(setError(error.message));

    // Rollback on error
    dispatch(setLeads(leads));
  } finally {
    dispatch(setLoading(false));
  }
};

// Delete Lead with Smooth UI
export const handleDeleteLead = (leadId) => async (dispatch, getState) => {

  // Optimistically remove lead before API call
  const { leads } = getState().leads;
  const updatedLeads = leads.filter((lead) => lead._id !== leadId);

  dispatch(setLeads(updatedLeads)); // Update UI instantly
  dispatch(setLoading(true));

  try {
    await axios.delete(`strokeWidth/api/lead/${leadId}`);
    toast.success("Deleted Leads")
  } catch (error) {
    toast.error("Error deleting lead:", error.message)
    dispatch(setError("Failed to delete lead"));

    // Rollback on error
    dispatch(setLeads(leads));
  } finally {
    dispatch(setLoading(false));
  }
};

// Redux Slice
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
    deleteLead(state, action) {
      const leadId = action.payload;
      state.leads = state.leads.filter(lead => lead._id !== leadId);
      state.filteredLeads = state.filteredLeads.filter(lead => lead._id !== leadId);
    }
  },
});

export const { setLeads, setFilteredLeads, setLoading, setError, deleteLead } = leadsSlice.actions;
export default leadsSlice.reducer;
