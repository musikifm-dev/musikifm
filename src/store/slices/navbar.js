import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export const { setIsOpen } = navbarSlice.actions
export default navbarSlice.reducer
