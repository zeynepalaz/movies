import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { baseUrl, options } from './../app/apiConfigs'

export const movieActions = createAsyncThunk(
  'movies/movieActions',
  async (dataInfo) => {
    const data_url = baseUrl + dataInfo.dataUrl;
    const mediaType = dataInfo.mediaType;

    const response = await axios.get(data_url, options);

    if(mediaType == "movieDetail") {
      return {
        type: 'detail', data: response?.data
      }
    } else {
      return {
        type: 'list', data: response?.data?.results
      }
    }
  },
);

const initialState = {
  movieData: [],
  movieDetailData: {},
  movieDataUrl: "",
  movieStatus: 'idle',
  movieError: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder
    .addCase(movieActions.pending, (state) => {
      state.movieStatus = 'loading';
    })
    .addCase(movieActions.fulfilled, (state, action) => {
      state.movieStatus = 'succeeded';
      console.log(action, "action")
      if(action.payload.type === "list") {
        state.movieData = action.payload.data;  
      } else {
        state.movieDetailData = action.payload.data; 
      }
      state.movieDataUrl = action.payload.data_url;       
    })
    .addCase(movieActions.rejected, (state, action) => {
      state.movieStatus = 'failed';
      state.movieError = action.error.message;
    });
  },
});

export default moviesSlice.reducer;