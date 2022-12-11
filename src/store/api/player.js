import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APP } from 'utils/constants'

// Define a service using a base URL and expected endpoints
export const playerDataApi = createApi({
  reducerPath: 'playerDataApi',

  baseQuery: fetchBaseQuery({
    baseUrl: APP.base,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    getPlayerData: builder.query({
      query: () => '/playing',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPlayerDataQuery } = playerDataApi
