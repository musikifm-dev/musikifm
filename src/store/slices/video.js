import { createSlice } from '@reduxjs/toolkit'

export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videoState: true,
    videoUrl: null,
  },
  reducers: {
    changeVideoState: (state, action) => {
      state.videoState = action.payload
    },
    setVideoUrl: (state, action) => {
      state.videoUrl = action.payload
    },
  },
})

export const { changeVideoState, setVideoUrl } = videoSlice.actions

export default videoSlice.reducer
