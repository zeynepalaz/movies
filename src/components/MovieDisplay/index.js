import './movieDisplay.scss';
import React from 'react';
import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import MovieCard from './../../components/MovieCard';
import { movieActions } from './../../movies/moviesSlice';
import { fetchMovieGenresData } from './../../movies/movieGenresSlice';

function MovieDisplay({ url }) {

	const dataInfo = {
		dataUrl : url,
		mediaType : "popularMovies"
	}

	const dispatch = useDispatch();
	useSelector((state) => console.log(state, "state"));
	const {movieData, movieDataUrl, movieStatus, movieError} = useSelector((state) => state.moviesReducer);
	const {movieGenresData, genreStatus, genreError} = useSelector((state) => state.movieGenresReducer);

	useEffect(() => {
    dispatch(movieActions(dataInfo));
  }, [url, dispatch]);

  useEffect(() => {
    if (genreStatus === 'idle') {
      dispatch(fetchMovieGenresData());
    }
  }, [genreStatus, dispatch]);

	if (movieStatus === 'loading') {
    return <h2>Loading...</h2>;
  }

	if (movieStatus === 'failed') {
    return <p>{movieError}</p>;
  }

  if (!movieData || movieData.length <= 0) {
    return <div>Data yok</div>;
  }
	
	return (
		//<div>{movieData?.length}</div>
		<div className='movie-display'>
			<div className='movie-display__container'>
				{movieData?.map((item, index) => {

					const genresArray = movieGenresData
					.filter(genre => item.genre_ids.includes(genre.id))
					.map(genre => genre.name)

					return (
						<MovieCard
						key={index}
						id={item.id}
						posterPath={item.poster_path}
						title={item.title}
						genres={genresArray}
						overview={item.overview}
						releaseDate={item.release_date}
					/>
					)
				})}
			</div>
		</div>
	);
}

export default MovieDisplay;