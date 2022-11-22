import { configureStore } from '@reduxjs/toolkit'
import { playerDataApi } from './api/player'
import playerReducer from './slices/player'
import authReducer from './slices/auth'
import { authApi } from './api/auth'

export default configureStore({
  reducer: {
    player: playerReducer,
    [playerDataApi.reducerPath]: playerDataApi.reducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(playerDataApi.middleware).concat(authApi.middleware)
  },
})
