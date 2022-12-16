import { createSlice } from '@reduxjs/toolkit'

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    selectedPodcastFilter: [],
    selectedBlogFilter: [],
  },
  reducers: {
    setPodcastFilter: (state, action) => {
      state.selectedPodcastFilter.push(action.payload)
    },
    deletePodcastFilter: (state, action) => {
      if (state.selectedPodcastFilter.includes(action.payload)) {
        state.selectedPodcastFilter = state.selectedPodcastFilter.filter((n) => n !== action.payload)
      }
    },
    setBlogFilter: (state, action) => {
      state.selectedBlogFilter.push(action.payload)
    },
    deleteBlogFilter: (state, action) => {
      if (state.selectedBlogFilter.includes(action.payload)) {
        state.selectedBlogFilter = state.selectedBlogFilter.filter((n) => n !== action.payload)
      }
    },
  },
})

export const { setPodcastFilter, deletePodcastFilter, setBlogFilter, deleteBlogFilter } = podcastSlice.actions

export default podcastSlice.reducer
