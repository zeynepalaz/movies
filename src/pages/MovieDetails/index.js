import './moviedetails.scss';

import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import { movieActions } from '../../movies/moviesSlice';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const dataInfo = {
		dataUrl : `/movie/${id}?language=en-US`,
		mediaType : "movieDetail"
	}

  const { movieDetailData, movieStatus, movieError} = useSelector((state) => state.moviesReducer);
 
  useEffect(() => {
    dispatch(movieActions(dataInfo));
  }, []);

  if (movieStatus === 'loading') {
    return <h2>Loading...</h2>;
  }

  if (movieStatus === 'failed') {
    return <p>{movieError}</p>;
  }

  if (!movieDetailData) {
    return <div>Data yok</div>;
  }

  return (
    <div className='movie-details'>
      <div className='movie-details__container'>
        <div className='movie-details__title'>{movieDetailData?.original_title}</div>
  

        <div className='movie-details__content'>
          <figure className='movie-details__img'>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetailData?.poster_path}`} />
          </figure>
          <div className='movie-details__info'>
            <div className='movie-details__overview'>{movieDetailData?.overview}</div>
            <div className='movie-details__genres'>{movieDetailData?.genres?.map(genre => genre.name).join(", ")}</div>
          </div>
        </div>
      </div>
    </div>
  );
	
};

export default MovieDetails;