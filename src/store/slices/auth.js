import { createSlice } from '@reduxjs/toolkit'

const localStorageToken = localStorage.getItem('token') !== null ? localStorage.getItem('token') : null

const authSlice = createSlice({
  name: 'auth',
  initialState: { username: null, id: null, token: localStorageToken, isAuthenticated: false },
  reducers: {
    setCredentials: (state, action) => {
      const { username, id, token } = action.payload
      state.username = username
      state.token = token
      state.id = id
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.username = null
      state.id = null
      state.token = null
      state.isAuthenticated = false
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
