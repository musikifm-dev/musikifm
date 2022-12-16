import { createSlice } from '@reduxjs/toolkit'

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    selectedFilter: [],
  },
  reducers: {
    setPodcastFilter: (state, action) => {
      state.selectedFilter.push(action.payload)
    },
    deletePodcastFilter: (state, action) => {
      if (state.selectedFilter.includes(action.payload)) {
        console.log('state')
        state.selectedFilter = state.selectedFilter.filter((n) => n !== action.payload)
      }
    },
  },
})

export const { setPodcastFilter, deletePodcastFilter } = podcastSlice.actions

export default podcastSlice.reducer
