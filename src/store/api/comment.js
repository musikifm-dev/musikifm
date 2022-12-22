import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APP } from 'utils/constants'

// Define a service using a base URL and expected endpoints
export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APP.base,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    sendComment: builder.mutation({
      query: (data) => {
        const { user, review, id } = data
        return {
          url: 'api/reviews',
          method: 'POST',
          body: {
            userDisplayName: user,
            body: review,
            podcast: id,
          },
        }
      },
    }),
  }),
})

export const { useSendCommentMutation } = commentApi
