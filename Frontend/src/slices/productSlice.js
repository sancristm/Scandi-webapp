import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: localStorage.getItem("productDetails")
    ? JSON.parse(localStorage.getItem("productDetails"))
    : null,
};

const productSlice = createSlice({
  name: "prod",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.productDetails = action.payload;
      localStorage.setItem("productDetails", JSON.stringify(action.payload));
    },
    deleteProduct: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("productDetails");
    },
  },
});

export const { setProduct } = productSlice.actions;
export const { deleteProduct } = productSlice.actions;

export default productSlice.reducer;
