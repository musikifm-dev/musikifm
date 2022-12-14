import { createSlice } from '@reduxjs/toolkit'

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    selectedFilter: null,
  },
  reducers: {
    setPodcastFilter: (state, action) => {
      state.selectedFilter = action.payload
    },
  },
})

export const { setPodcastFilter } = podcastSlice.actions

export default podcastSlice.reducer
