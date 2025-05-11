import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    selectPlace: null,
    selectedCategory: null,
    selectedItem: null,
    currentOrder: null,
    orderItems: [],
    orderIdCounter: 0, // ensures unique IDs
  },
  reducers: {
    setPlaceToEat: (state, action) => {
      state.selectPlace = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    startNewOrder: (state, action) => {
      state.currentOrder = {
        id: state.orderIdCounter,
        drink: action.payload,
        choice: null,
        size: null,
        basePrice: 0,
        addOns: [],
        quantity: 1,
      };
    },
    chooseType: (state, action) => {
      if (state.currentOrder) {
        state.currentOrder.choice = action.payload;
      }
    },
    chooseSize: (state, action) => {
      if (state.currentOrder) {
        state.currentOrder.size = action.payload.name;
        state.currentOrder.basePrice = action.payload.price;
      }
    },
    addAddOn: (state, action) => {
      if (!state.currentOrder) return;
      const exits = state.currentOrder.addOns.find(
        (item) => item.name === action.payload.name
      );
      if (!exits) {
        state.currentOrder.addOns.push(action.payload);
      } else {
        state.currentOrder.addOns = state.currentOrder.addOns.filter(
          (item) => item.name !== action.payload.name
        );
      }
    },
    increaseQuantity: (state) => {
      if (state.currentOrder) {
        state.currentOrder.quantity += 1;
      }
    },
    decreaseQuantity: (state) => {
      if (state.currentOrder && state.currentOrder.quantity > 1) {
        state.currentOrder.quantity -= 1;
      }
    },
    increaseQuantityCart: (state, action) => {
      const item = state.orderItems.find(
        (order) => order.id === action.payload
      );
      if (item) item.quantity += 1;
    },
    decreaseQuantityCart: (state, action) => {
      const item = state.orderItems.find(
        (order) => order.id === action.payload
      );
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    cancelItem: (state) => {
      state.currentOrder = null;
    },
    addToOrder: (state) => {
      if (state.currentOrder) {
        state.orderItems.push({ ...state.currentOrder });
        state.orderIdCounter += 1; // ensures unique IDs
        state.currentOrder = null;
      }
    },
    removeItemOrder: (state, action) => {
      state.orderItems = state.orderItems.filter(
        (order) => order.id !== action.payload
      );
    },
    addDuplicateOrder: (state, action) => {
      const orderToDuplicate = state.orderItems[action.payload];
      if (orderToDuplicate) {
        state.orderItems.push({ ...orderToDuplicate });
      }
    },
    clearOrder: (state) => {
      state.orderItems = [];
    },
  },
});

export const getAllTotalPrice = (state) => {
  const getAlltotal = state.products.orderItems.reduce((total, order) => {
    const basePrice = parseFloat(order.basePrice) * order.quantity;
    const addOnsPrice = order.addOns.reduce(
      (sum, addOn) => sum + parseFloat(addOn.price) * order.quantity,
      0
    );
    return total + basePrice + addOnsPrice;
  }, 0);
  return getAlltotal.toFixed(2);
};

export const {
  setPlaceToEat,
  setCategory,
  setSelectedItem,
  startNewOrder,
  chooseType,
  chooseSize,
  addAddOn,
  increaseQuantity,
  decreaseQuantity,
  cancelItem,
  addToOrder,
  increaseQuantityCart,
  decreaseQuantityCart,
  removeItemOrder,
  addDuplicateOrder,
  clearOrder,
} = productsSlice.actions;
export default productsSlice.reducer;
