import './movieCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { array, string } from "prop-types"


function MovieCard({ id, posterPath, title, genres, overview, releaseDate }) {

	const movieId = id;

	if(!posterPath) {
		console.log("poster yok")
	}

	return (
		<div className='movie-card'>
			<div className='movie-card__title'>{title}</div>
			<div className='movie-card__poster'>
				<Link key={id} to={`/movie/${id}`}><img src={posterPath ? `https://image.tmdb.org/t/p/w185${posterPath}` : 'https://placehold.co/185x278'} alt={title} /></Link>
			</div>
			<div className='movie-card__genre'> {genres.map(genre => genre).join(", ")}</div>
		</div>
	);
}

export default MovieCard;

MovieCard.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	posterPath: PropTypes.string,
	title: PropTypes.string,
	genres: PropTypes.array,
	overview: PropTypes.string,
	releaseDate: PropTypes.string
}