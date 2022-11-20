import { configureStore } from '@reduxjs/toolkit'
import { playerDataApi } from './api/player'
import playerReducer from './slices/player'
import authReducer from "./slices/auth"

export default configureStore({
  reducer: {
    player: playerReducer,
    [playerDataApi.reducerPath]: playerDataApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(playerDataApi.middleware)
  },
})
