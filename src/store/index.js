import { configureStore } from '@reduxjs/toolkit'
import { playerDataApi } from './api/player'
import playerReducer from './slices/player'
import authReducer from './slices/auth'
import { authApi } from './api/auth'
import { dataApi } from './api/data'

export default configureStore({
  reducer: {
    player: playerReducer,
    [playerDataApi.reducerPath]: playerDataApi.reducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(playerDataApi.middleware).concat(authApi.middleware).concat(dataApi.middleware)
  },
})
