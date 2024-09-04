import './App.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This will render the current route's element */}
      </main>
    </div>
  );
}

export default App; 
 