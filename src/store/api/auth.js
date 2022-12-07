import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from 'store/slices/auth'
import { APP } from 'utils/constants'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APP.base,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => {
        const { phone, username, password, email } = data
        return {
          url: APP.register,
          method: 'POST',
          headers: {
            Authorization: localStorage.getItem('token'),
          },
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
          // credentials: 'include',
        }
      },
      /* eslint-disable no-unused-vars */
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setCredentials({ username: data.user.username, id: data.user.id, token: data.jwt }))
          localStorage.setItem('token', data.jwt)
        } catch (err) {
          console.log(err)
        }
      },
    }),
    checkAuthentication: builder.query({
      query: () => '/users/me',
    }),

    getUserData: builder.query({
      query: () => `${APP.userData}/10`,
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation, useGetUserDataQuery, useCheckAuthenticationQuery } = authApi
