import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/player'
import podcastReducer from './slices/podcast'
import blogReducer from './slices/blog'
import { playerDataApi } from './api/player'
import { authApi } from './api/auth'
import { commentApi } from './api/comment'
import { dataBaseApi } from './api/data-base'
import { adminBaseApi } from './api/admin-base'

export default configureStore({
  reducer: {
    player: playerReducer,
    podcast: podcastReducer,
    blog: blogReducer,
    [dataBaseApi.reducerPath]: dataBaseApi.reducer,
    [adminBaseApi.reducerPath]: adminBaseApi.reducer,
    [playerDataApi.reducerPath]: playerDataApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(playerDataApi.middleware)
      .concat(authApi.middleware)
      .concat(dataBaseApi.middleware)
      .concat(adminBaseApi.middleware)
      .concat(commentApi.middleware)
  },
})
