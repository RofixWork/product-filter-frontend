import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://product-filter-api.vercel.app/api/v1'}),
    endpoints: builder => ({
        getAllProducts: builder.query({
            query: ({page, search, category, rating, sort, price}) => ({
                url: `/products?page=${page}&sort=${sort}&limit=5&search=${search}&category=${category}&numericFilters=rating${rating},price${price}`
            })
        })
    })
})

export const {useGetAllProductsQuery} = productAPI