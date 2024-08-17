import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Header({  }) {
	return (
		<header className='main-header'>
      <h1>
        <nav>
          <Link to="/">Movie Database -&nbsp;<span>Your database for movies</span></Link>
        </nav>
      </h1>
    </header>
	);
}

export default Header;