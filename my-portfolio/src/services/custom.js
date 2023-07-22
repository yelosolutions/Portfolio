import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//creating a service
export const myApi = createApi({
    reducerPath: 'myApi',
    //baseQuery: '',
    endpoints: (builder) => ({
        getData: builder.query({
            query: (params) => `test`   // return a url
        })
    })
});

/**
 * endpoints - a call to the callback function, where I get 'builder' to
 * help build endpoints, create an immediate return, where I create the 
 * specific endpoints
 * 
 * baseQuery -
 */