import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const TableSlice = createSlice({
  name: "counter",
  initialState: {
    data: [],
    filterValue: [],
  },

  reducers: {
    setData(state, action) {
      state.data = action.payload;
      state.filterValue = action.payload;
    },

    filterData(state, action) {
      state.filterValue = state.data.filter((i) => {
        if (i[action.payload.field]) {
          switch (action.payload.condition) {
            case "1":
              if (i[action.payload.field] === action.payload.value) {
                return i;
              }
              break;
            case "2":
              if (i[action.payload.field].includes(action.payload.value)) {
                return i;
              }
              break;
            case "3":
              if (
                Number(action.payload.value) < Number(i[action.payload.field])
              ) {
                return i;
              }
              break;
            case "4":
              if (
                Number(action.payload.value) > Number(i[action.payload.field])
              ) {
                return i;
              }
              break;

            default:
              break;
          }
        } else {
          state.filterValue = state.data;
        }
      });
    },
  },
});

export const { setData, filterData } = TableSlice.actions;

export default TableSlice.reducer;
