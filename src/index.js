import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store'; // Adjust path according to your project structure
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MovieDetails from './pages/MovieDetails';

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

