import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseUrl, options } from './../app/apiConfigs'

const data_url = `${baseUrl}/genre/movie/list?language=en`;

export const fetchMovieGenresData = createAsyncThunk(
  'movies/fetchMovieGenresData',
  async () => {
    const response = await axios.get(data_url, options);
    const data = response.data;

    const movieGenresArray = data.genres || [];

    return movieGenresArray;
  },
);

const initialState = {
  movieGenresData: [],
  genreStatus: 'idle',
  genreError: null,
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
      state.genreStatus = 'loading';
    })
    .addCase(fetchMovieGenresData.fulfilled, (state, action) => {
      state.genreStatus = 'succeeded';
      state.movieGenresData = action.payload;            
    })
    .addCase(fetchMovieGenresData.rejected, (state, action) => {
      state.genreStatus = 'failed';
      state.genreError = action.error.message;
    });
  },
});

export default movieGenresSlice.reducer;