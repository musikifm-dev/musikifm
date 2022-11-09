import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Songs from 'song.json'

// Define a service using a base URL and expected endpoints
export const playerDataApi = createApi({
  reducerPath: 'playerDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://api.discogs.com/database/search?token=sVSjFzhvRFGxKdEPsHBIAEmmflcGIwCooPIOlNTL&q=' +
      Songs.song +
      '-' +
      Songs.artist,
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => Songs.song + '-' + Songs.artist,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataQuery } = playerDataApi
