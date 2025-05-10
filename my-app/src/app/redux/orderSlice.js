import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    items: [],
    orderNumber: "",
  },
  reducers: {
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
});

export const { setOrderNumber } = orderSlice.actions;
export default orderSlice.reducer;
