import { createSlice } from '@reduxjs/toolkit'
import { APP } from 'utils/constants'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    current: {
      id: '',
      title: 'Akira Ito',
      image: 'https://i.discogs.com/7Xktk6LWBQLdd32ha3sNJn2XNQo4gUIIRlHswiIDHm8/rs:fit/g:sm/q:90/h:343/w:346/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNzkw/MjYwLTE2NTcwMzMy/MTItNDc4NS5qcGVn.jpeg',
      description: 'Objectively disseminate adaptive intellectual capital through installed base potentialities. Proactively visualize resource sucking processes.',
      src: APP.radio,
    }, // * Current song data
    controls: false, // * Podcast forward song feature
    switchType: false, // * FALSE --> RADIO --- TRUE --> PODCAST
    isPlaying: false, // * Is it playing?
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
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

export const { setControls, setCurrent, setIsPlaying, setPlayerType } = playerSlice.actions

export default playerSlice.reducer
