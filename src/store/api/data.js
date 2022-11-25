import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APP } from 'utils/constants'

// Define a service using a base URL and expected endpoints
export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APP.base,
  }),
  endpoints: (builder) => ({
    getBlogData: builder.query({
      query: () => 'api/blog-report',
    }),
    getPodcastData: builder.query({
      query: () => 'api/podcast-report',
    }),
    getVideoData: builder.query({
      query: () => 'api/video-report',
    }),
  }),
})

export const { useGetPodcastDataQuery, useGetVideoDataQuery, useGetBlogDataQuery } = dataApi
