import { createSlice } from '@reduxjs/toolkit'
// import { APP } from 'utils/constants'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    current: {
      // artist: null,
      // description: null,
      // image: null,
      // song: null,
      // src: null,
    }, // * Current song data

    // * Podcast contol function forward song feature
    switchType: false, // * FALSE --> RADIO --- TRUE --> PODCAST
    playing: false, // * Is it playing?
    muted: false,
    paused: false,
    time: 0,
    duration: 0,
    volume: 1,
    buffered: [],
    podcastPlayer: false,
    isMobilePlayer: false,
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
    },
    setControls: (state, action) => {
      state.controls = action.payload
    },
    setState: (state, action) => {
      return {
        ...state,
        ...action.payload,
      }
    },
    updateTime: (state, action) => {
      state.time = action.payload
    },
    setPlayerType: (state, action) => {
      state.switchType = action.payload
    },
  },
})

export const { setCurrent, setControls, setState, setPlayerType, updateTime } = playerSlice.actions

export default playerSlice.reducer
