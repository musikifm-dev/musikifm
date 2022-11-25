import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APP } from 'utils/constants'
// import Songs from 'song.json'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APP.base,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => {
        const { phoneNumber, username, password, email } = data
        return {
          url: APP.register,
          method: 'POST',
          body: {
            username: username,
            password: password,
            email: email,
            phoneNumber: phoneNumber,
            // termsAndConditions: termsAndConditions,
          },
        }
      },
    }),
    login: builder.mutation({
      query: (data) => {
        const { email, password } = data
        return {
          url: APP.login,
          method: 'POST',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          body: {
            // username: username,
            password: password,
            email: email,
          },
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterMutation, useLoginMutation } = authApi
