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
    getPodcastDetail: builder.query({
      query: (id) => `${APP.podcasts}/${id}?populate=*`,
    }),
    getVideoData: builder.query({
      query: () => APP.video,
    }),
    getVideoDetail: builder.query({
      query: () => APP.videos,
    }),
  }),
})

export const {
  useGetHomeDataQuery,
  useGetPodcastDataQuery,
  useGetPodcastDetailQuery,
  useGetVideoDataQuery,
  useGetBlogDataQuery,
  useGetVideoDetailQuery,
} = dataApi
