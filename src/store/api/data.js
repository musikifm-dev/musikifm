import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APP } from 'utils/constants'

// Define a service using a base URL and expected endpoints
export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APP.base,
  }),
  endpoints: (builder) => ({
    getHomeData: builder.query({
      query: () => APP.home,
    }),
    getBlogData: builder.query({
      query: () => APP.blog,
    }),
    getPodcastData: builder.query({
      query: () => APP.podcast,
    }),
    getVideoData: builder.query({
      query: () => APP.video,
    }),
  }),
})

export const { useGetHomeDataQuery, useGetPodcastDataQuery, useGetVideoDataQuery, useGetBlogDataQuery } = dataApi
