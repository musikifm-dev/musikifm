import { createSlice } from '@reduxjs/toolkit'

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    selectedPodcastFilter: ['All'],
    nextPodcastState: 0,
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
    resetPodcastFilter: (state) => {
      state.selectedPodcastFilter = ['All']
    },
    setNextPodcast: (state, action) => { // player podcast 
      console.log(action.payload)
      if (action.payload >= state.nextPodcastState) {
        state.nextPodcastState += 1
      }
    },
  },
})

export const {
  setPodcastFilter,
  deletePodcastFilter,
  resetPodcastFilter,
  setNextPodcast,
} = podcastSlice.actions

export default podcastSlice.reducer
