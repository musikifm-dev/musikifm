import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/player'
import podcastReducer from './slices/podcast'
import { playerDataApi } from './api/player'
import { authApi } from './api/auth'
import { dataApi } from './api/data'

export default configureStore({
  reducer: {
    player: playerReducer,
    podcast: podcastReducer,
    [playerDataApi.reducerPath]: playerDataApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(playerDataApi.middleware).concat(authApi.middleware).concat(dataApi.middleware)
  },
})
