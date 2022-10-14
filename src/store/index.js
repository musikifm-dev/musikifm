import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './slices/player';

export default configureStore({
  reducer: {
    player: playerReducer
  }
});
