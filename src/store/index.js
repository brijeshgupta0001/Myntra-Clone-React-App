import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from "./ItemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import BagSlice from "./BagSlice";

const myntraStore = configureStore({
  reducer: {
    items: ItemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: BagSlice.reducer,
  },
});

export default myntraStore;
