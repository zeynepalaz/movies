import './movieDisplay.scss';
import React from 'react';
import MovieCard from './../../components/MovieCard';
import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieData } from '../../movies/moviesSlice';
import { fetchMovieGenresData } from '../../movies/movieGenresSlice';

function MovieDisplay({  }) {

	const dataInfo = {
		dataUrl : 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
		mediaType : "popularMovies"
	}

	const dispatch = useDispatch();
	const movieData = useSelector((state) => state.moviesReducer.movieData);
	const movieDataUrl = useSelector((state) => state.moviesReducer.movieDataUrl);
	const movieStatus = useSelector((state) => state.moviesReducer.status);
	const moviesError = useSelector((state) => state.moviesReducer.error);

  const movieGenresData = useSelector((state) => state.movieGenresReducer.movieGenresData);
	const genresStatus = useSelector((state) => state.movieGenresReducer.status);
	const genresError = useSelector((state) => state.movieGenresReducer.error);

	useEffect(() => {
    dispatch(fetchMovieData(dataInfo));
  }, [movieDataUrl, dispatch]);

  useEffect(() => {
    if (genresStatus === 'idle') {
      dispatch(fetchMovieGenresData());
    }
  }, [genresStatus, dispatch]);

	if (movieStatus === 'loading') {
    return <h2>Loading...</h2>;
  }

	if (movieStatus === 'failed') {
    return <p>{moviesError}</p>;
  }

  if (!movieData || movieData.length <= 0) {
    return <div>Data yok</div>;
  }
	
	return (
		//<div>{movieData?.length}</div>
		<div className='movie-display'>
			{movieData?.map((item, index) => {

				const genresArray = movieGenresData
				.filter(genre => item.genre_ids.includes(genre.id))
				.map(genre => genre.name)

				return (
					<MovieCard
					key={index}
					id={item.id}
					poster_path={item.poster_path}
					title={item.title}
					genres={genresArray}
					overview={item.overview}
					release_date={item.release_date}
				/>
				)
			})}
		</div>
	);
}

export default MovieDisplay;