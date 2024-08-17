import React from 'react';
import { useParams } from 'react-router-dom';

import Search from './../../components/Search'
import MovieDisplay from './../../components/MovieDisplay';

function SearchResults({  }) {
  const { searchParams } = useParams();
  const searchPath = `/search/movie?query=${searchParams}&include_adult=false&language=en-US&page=1`

	return (
		<div>
			<h2>Search Results</h2>

			<Search />
			<MovieDisplay url={searchPath} />
		</div>
	);
}

export default SearchResults;