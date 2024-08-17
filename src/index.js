import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import store from './app/store'; 
import Homepage from './pages/Homepage';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';

 // Create a browser router with your routes
 const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App />,
	  children: [
		{
		  path: "/", 
		  element: <Homepage />
		},
		{
		  path: "/search-results/:searchParams", 
		  element: <SearchResults />
		},
		{
		  path: "/movie/:id", 
		  element: <MovieDetails />
		}
	  ],
	},
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);

