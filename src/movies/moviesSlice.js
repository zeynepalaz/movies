import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODc0ODQ0ZGNkNDcwNmNjMmYyOWQ0N2U2MjU0N2Y0YyIsIm5iZiI6MTcyMjY5NDIyMC4zMzkyLCJzdWIiOiI2NmE3ZDljYjAyYzk3MjI0NTI5ZmQ5MjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5MPoBPTw_g0SMrsAssifGIgowkuiLsuGF-0CtJ4M1GU';

export const fetchMovieData = createAsyncThunk(
  'movies/fetchMovieData',
  async (dataInfo) => {
    const data_url = dataInfo.dataUrl;
    const mediaType = dataInfo.mediaType;

    let moviesArray = []; 
    const options = { 
      method: 'GET', 
      headers: { 
        accept: 'application/json', 
        Authorization: `Bearer ${API_KEY}`
      } 
    };

    const response = await axios.get(data_url, options);
    const data = response.data;

    if(mediaType == "movieDetail") {
      moviesArray = data || [];
    } else {
      moviesArray = data.results || [];
    }

    return {moviesArray, data_url};
  },
);

const initialState = {
  movieData: [],
  dataUrl: "",
  status: 'idle',
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchMovieData.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchMovieData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.movieData = action.payload.moviesArray;      
      state.dataUrl = action.payload.data_url;         
    })
    .addCase(fetchMovieData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default moviesSlice.reducer;