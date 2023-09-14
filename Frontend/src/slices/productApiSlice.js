import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/products";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/addProduct`,
        method: "POST",
        body: data,
      }),
    }),
    getProducts: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/products`,
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const { useAddProductMutation } = productApiSlice;
