import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        playerType:false,
        current:false,
        controls:false,
        playing:false
    },
    reducers: {
        setCurrent: (state,action) =>{
            state.current = action.payload
        },
        setControls: (state,action) =>{
            state.controls = action.payload
        },
        setPlaying: (state,action) =>{
            state.playing = action.payload
        },
        setType: (state,action) =>{
            state.playerType = action.payload
        },
    }
})

export const {
    setControls,
    setCurrent,
    setPlaying,
    setType
} = playerSlice.actions

export default playerSlice.reducer