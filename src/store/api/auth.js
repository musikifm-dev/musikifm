import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import Songs from 'song.json'
import { API_URL } from 'utils/URL'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => {
        const { phoneNumber, username, password, email } = data
        return {
          url: 'api/auth/local/register',
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
          url: 'api/auth/local',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
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
