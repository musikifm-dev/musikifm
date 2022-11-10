import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Songs from 'song.json'
import { API_URL } from 'utils/URL'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    register: builder.query({
      query: () => Songs.song + '-' + Songs.artist,
      
    }),
    login: builder.query({
      query: () => Songs.song + '-' + Songs.artist,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataQuery } = authApi
