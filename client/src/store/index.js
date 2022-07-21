import { configureStore } from "@reduxjs/toolkit";
import TableSlice from "./Slice/TableSlice";

export default configureStore({
  reducer: {
    tableData: TableSlice,
  },
});
