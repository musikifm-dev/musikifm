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
    switchType: false, // * FALSE --> RADIO --- TRUE --> PODCAST
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
    setPlayerType: (state, action) => {
      state.switchType = action.payload
    },
  },
})

export const { setControls, setCurrent, setPlaying, setPlayerType } = playerSlice.actions

export default playerSlice.reducer
