import { useState } from 'react'
import './App.css'

import React from 'react';
import Game from './pages/Game';


function App() {
  const [page, setPage] = useState('game');

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <main>
      {page === 'game' && <Game onPageChange={handlePageChange} />}
    </main>
  )
}

export default App
