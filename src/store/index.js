import { configureStore } from '@reduxjs/toolkit'
import { playerDataApi } from './api/player'
import playerReducer from './slices/player'

export default configureStore({
  reducer: {
    player: playerReducer,
    [playerDataApi.reducerPath]: playerDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(playerDataApi.middleware)
  },
})
