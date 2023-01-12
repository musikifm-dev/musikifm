import { createSlice } from '@reduxjs/toolkit'

// const localStorageToken = localStorage.getItem('token') !== null ? localStorage.getItem('token') : null

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    logout: () => {
      localStorage.clear()
    },
    loginStep: (state, action) => {
      state.step = action.payload
    },
    setStep: (state, action) => {
      state.step = action.payload
    },
  },
})

export const { setCredentials, logout, loginStep, setStep } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
