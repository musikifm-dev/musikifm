import { createSlice } from '@reduxjs/toolkit'
import { APP } from 'utils/constants'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    current: {
      id: '',
      title: '',
      image: '',
      description: '',
      src: APP.radio,
    }, // * Current song data
    controls: false, // * Podcast forward song feature
    playerType: false, // * Is it radio, podcast or song
    playing: false, // * Is it playing?
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
    },
    setControls: (state, action) => {
      state.controls = action.payload
    },
    setPlaying: (state, action) => {
      state.playing = action.payload
    },
    setType: (state, action) => {
      state.playerType = action.payload
    },
  },
})

export const { setControls, setCurrent, setPlaying, setType } = playerSlice.actions

export default playerSlice.reducer
