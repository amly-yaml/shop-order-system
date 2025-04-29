import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category) => {
    // console.log(
    //   `https://dessertshop.free.beeceptor.com/categories/${category}`
    // );
    // const response = await fetch(
    //   `https://dessertshop.free.beeceptor.com/categories/${category}`
    // );
    return null;
  }
);

export const fetchProductsByCategories = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category) => {
    const response = await fetch(`https://dummyjson.com/products/categories`);
    return response.json();
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    selectPlace: null,
    selectedCategory: null,
    selectedItem: null,
    items: [],
    status: "idle",
    error: null,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        (state.status = "succeeded"), (state.items = action.payload);
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      });
  },
});

export const { setPlaceToEat, setCategory, setSelectedItem } =
  productsSlice.actions;
export default productsSlice.reducer;
