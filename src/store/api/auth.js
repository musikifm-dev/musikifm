import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APP } from 'utils/constants'

const getToken = () => {
  const token = localStorage.getItem('token')
  if (token == 'undefined') return undefined
  return token
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APP.base,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    prepareHeaders: (headers) => {
      headers.set('Authorization', getToken() ? `Bearer ${getToken()}` : null)
      return headers
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => {
        const { phone, username, password, email } = data
        return {
          url: APP.register,
          method: 'POST',
          body: {
            username: username,
            password: password,
            email: email,
            phone: phone,
          },
        }
      },
    }),
    login: builder.mutation({
      query: (data) => {
        const { username, email, password } = data
        return {
          url: APP.login,
          method: 'POST',
          body: {
            identifier: email ? email : username,
            password: password,
          },
          credentials: 'include',
        }
      },
    }),
    getMyData: builder.query({
      query: () => 'api/users/me',
    }),

    getUserData: builder.query({
      query: () => `${APP.userData}/10`,
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation, useGetUserDataQuery, useGetMyDataQuery } = authApi
