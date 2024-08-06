import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODc0ODQ0ZGNkNDcwNmNjMmYyOWQ0N2U2MjU0N2Y0YyIsIm5iZiI6MTcyMjY5NDIyMC4zMzkyLCJzdWIiOiI2NmE3ZDljYjAyYzk3MjI0NTI5ZmQ5MjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5MPoBPTw_g0SMrsAssifGIgowkuiLsuGF-0CtJ4M1GU';
const data_url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

export const fetchMovieGenresData = createAsyncThunk(
  'movies/fetchMovieGenresData',
  async () => {
    const options = { 
      method: 'GET', 
      headers: { 
        accept: 'application/json', 
        Authorization: `Bearer ${API_KEY}`
      } 
    };

    const response = await axios.get(data_url, options);
    const data = response.data;

    const movieGenresArray = data.genres || [];

    return movieGenresArray;
  },
);

const initialState = {
  movieGenresData: [],
  status: 'idle',
  error: null,
};

const movieGenresSlice = createSlice({
  name: 'movieGenres',
  initialState,
  reducers: {
    // 
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchMovieGenresData.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchMovieGenresData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.movieGenresData = action.payload;            
    })
    .addCase(fetchMovieGenresData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default movieGenresSlice.reducer;