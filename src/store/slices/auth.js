import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, step: 1 },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload
      state.user = user
      state.token = accessToken
    },
    logOut: (state) => {
      state.user = null
      state.token = null
    },
    loginStep: (state, action) => {
      state.step = action.payload
    },
    setStep: (state, action) => {
      state.step = action.payload
    },
  },
})

export const { setCredentials, logOut, loginStep, setStep } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
