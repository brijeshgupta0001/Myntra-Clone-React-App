import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsActions = ItemsSlice.actions;
export default ItemsSlice;
