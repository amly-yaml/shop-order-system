import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    items: [],
    orderNumber: '', 
  },
  reducers: {
    addToOrder: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromOrder: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      }
    },

   
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
});

export const { addToOrder, removeFromOrder, setOrderNumber } = orderSlice.actions;
export default orderSlice.reducer;
