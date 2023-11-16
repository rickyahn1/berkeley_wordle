import { useState } from 'react'
import './App.css'

import React from 'react';
import Home from './pages/Home';

function App() {
  const [page, setPage] = useState('home');

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <main>
      {page === 'home' && <Home onPageChange={handlePageChange} />}
    </main>
  )
}

export default App
