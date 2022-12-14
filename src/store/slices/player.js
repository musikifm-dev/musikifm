import { createSlice } from '@reduxjs/toolkit'
import { APP } from 'utils/constants'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    current: {
      artist: null,
      description: null,
      image: null,
      song: null,
      src: APP.radio,
    }, // * Current song data
    controls: false, // * Podcast forward song feature
    switchType: false, // * FALSE --> RADIO --- TRUE --> PODCAST
    isPlaying: false, // * Is it playing?
    podcastPlayer: false,
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
    },
    setPodcast: (state, action) => {
      state.podcastPlayer = action.payload
    },
    setControls: (state, action) => {
      state.controls = action.payload
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    },
    setPlayerType: (state, action) => {
      state.switchType = action.payload
    },
  },
})

export const { setCurrent, setPodcast, setControls, setIsPlaying, setPlayerType } = playerSlice.actions

export default playerSlice.reducer
