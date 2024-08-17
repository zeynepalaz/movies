import './homepage.scss';
import React from 'react';

import Search from './../../components/Search'
import MovieDisplay from './../../components/MovieDisplay';

function Homepage({  }) {

	return (
		<div>
			<Search />

			<h2>Popular Movies</h2>
			<MovieDisplay url='/movie/popular?language=en-US&page=1' />
		</div>
	);
}

export default Homepage;