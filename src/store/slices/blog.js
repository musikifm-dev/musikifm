import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    selectedBlogFilter: ['All'],
  },
  reducers: {
    setBlogFilter: (state, action) => {
      state.selectedBlogFilter.push(action.payload)
    },
    deleteBlogFilter: (state, action) => {
      if (state.selectedBlogFilter.includes(action.payload)) {
        state.selectedBlogFilter = state.selectedBlogFilter.filter((n) => n !== action.payload)
      }
    },
    resetBlogFilter: (state) => {
      state.selectedBlogFilter = ['All']
    },
  },
})

export const { setBlogFilter, deleteBlogFilter, resetBlogFilter } = blogSlice.actions

export default blogSlice.reducer
