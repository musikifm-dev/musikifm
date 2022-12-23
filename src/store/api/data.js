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
    getBlogDetail: builder.query({
      query: (id) => `${APP.blogs}/${id}?populate=*`,
    }),
    getPodcastData: builder.query({
      query: () => APP.podcast,
    }),
    getPodcastDetail: builder.query({
      query: (id) => `${APP.podcasts}/${id}?populate=*`,
    }),
    getPodcastReverseData: builder.query({
      query: () => APP.podcastReverse,
    }),
    getVideoData: builder.query({
      query: () => APP.video,
    }),
    getVideoDetail: builder.query({
      query: (id) => `${APP.videos}/${id}?populate=*`,
    }),
    getVideoHomeSlider: builder.query({
      query: () => APP.videoHomeSlider,
    }),
  }),
})

export const {
  useGetHomeDataQuery,
  useGetPodcastDataQuery,
  useGetPodcastDetailQuery,
  useGetPodcastReverseDataQuery,
  useGetVideoDataQuery,
  useGetBlogDataQuery,
  useGetBlogDetailQuery,
  useGetVideoDetailQuery,
  useGetVideoHomeSliderQuery,
} = dataApi
