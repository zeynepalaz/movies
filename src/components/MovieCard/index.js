import './movieCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ id, poster_path, title, genres, overview, release_date }) {

	const movieId = id;

	return (
		<div className='movie-card'>
			<div className='movie-card__poster'><Link key={id} to={`/movie/${id}`}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} /></Link></div>
			<div className='movie-card__title'>{title}</div>
			<div className='movie-card__genre'> {genres.map(genre => genre).join(", ")}</div>
			<div className='movie-card__desc'>{overview}</div>
			<div className='movie-card__release-date'>{release_date}</div>
		</div>
	);
}

export default MovieCard;