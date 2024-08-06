import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieData } from '../../movies/moviesSlice';

const MovieDetails = () => {
  const { id } = useParams();

  const dataInfo = {
		dataUrl : `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
		mediaType : "movieDetail"
	}

  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.moviesReducer.movieData);
  const movieDataUrl = useSelector((state) => state.moviesReducer.movieDataUrl);
	const movieStatus = useSelector((state) => state.moviesReducer.status);
	const moviesError = useSelector((state) => state.moviesReducer.error);

  useEffect(() => {
    dispatch(fetchMovieData(dataInfo));
  }, [id, movieDataUrl, dispatch]);

  if (movieStatus === 'loading') {
    return <h2>Loading...</h2>;
  }

  if (movieStatus === 'failed') {
    return <p>{moviesError}</p>;
  }

  if (!movieData) {
    return <div>Data yok</div>;
  }

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} />
    </div>
  );
	
};

export default MovieDetails;