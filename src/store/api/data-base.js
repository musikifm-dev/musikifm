import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APP } from 'utils/constants'

// Define a service using a base URL and expected endpoints
export const dataBaseApi = createApi({
  reducerPath: 'dataBaseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APP.adminBase,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    getBlogTags: builder.query({
      query: () => APP.blogTags, // APP.dataBase
    }),
    getPodcastTags: builder.query({
      query: () => APP.podcastTags, // APP.dataBase
    }),
  }),
})

export const { useSendCommentMutation, useGetBlogTagsQuery, useGetPodcastTagsQuery } = dataBaseApi
