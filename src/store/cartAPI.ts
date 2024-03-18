import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { updateProducts } from "./cartSlice";
import { ProductData, RawProductData } from "../types/all";

export const cartAPI = createApi({
    reducerPath: 'cartAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints: (builder) => ({
        fetchProducts: builder.query<ProductData[], void>({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
            transformResponse: (raw: RawProductData[]): ProductData[] => {
                return raw.map(r => ({ ...r, amount: 0 }));
            },
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                const { data } = await queryFulfilled;
                dispatch(updateProducts(data));
            },
        }),
    }),
});

export const { useFetchProductsQuery } = cartAPI;