import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CinemaDetail from './components/CinemaDetail';
import SearchSessionsPage from './pages/SearchSessionsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cinemas/:id" element={<CinemaDetail />} />
        <Route path="/search" element={<SearchSessionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
