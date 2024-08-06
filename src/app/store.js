import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from '../movies/moviesSlice'
import movieGenresSlice from '../movies/movieGenresSlice'


const store = configureStore({
    reducer: {
      moviesReducer : moviesSlice,
      movieGenresReducer : movieGenresSlice
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;