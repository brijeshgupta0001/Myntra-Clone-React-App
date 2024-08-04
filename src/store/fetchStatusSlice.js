import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchingDone: false,
    currentlyfetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchingDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyfetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyfetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
