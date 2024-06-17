import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import './SearchSessionsPage.css';
import './Home.css';
import PopUpDetails from '../components/PopUpDetails';

const SearchSessionsPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const handleSearch = (filters) => {
    // Simulation des résultats de recherche
    const dummyResults = [
      {
        id: 1,
        movieTitle: 'Movie 1',
        date: '2024-06-18',
        location: 'New York',
        vostfr: ['VOSTFR'],
        equipment: ['Dolby Atmos', 'Sièges inclinables'],
      },
      {
        id: 2,
        movieTitle: 'Movie 2',
        date: '2024-06-19',
        location: 'Los Angeles',
        equipment: ['IMAX', '3D'],
      },
    ];

    setSearchResults(dummyResults);
  };

  const openPopUp = (session) => {
    setSelectedSession(session);
    setShowPopup(true);
  };

  const closePopUp = () => {
    setShowPopup(false);
  };

  const handleReservation = () => {
    // Logique pour réserver une place
    alert('Place réservée avec succès !');
    closePopUp();
  };

  return (
    <div className="search-sessions-page">
      <div className="home">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/search">Recherche de Séances</Link></li>
            <li><Link to="/reservations">Mes Réservations</Link></li>
            <li><Link to="/statistics">Statistiques</Link></li>
          </ul>
        </nav>
        <div className="branding">
          <h1>Projet Cinéma</h1>
          <p>La plateforme qui vous fait gagner du temps</p>
        </div>
      </header>
      </div>

      <div className="search-form-container">
        <h2>Recherche de Séances</h2>
        <SearchForm onSearch={handleSearch} />
      </div>

      <div className="results">
        {searchResults.length > 0 ? (
          searchResults.map((session) => (
            <div key={session.id} className="session-item" onClick={() => openPopUp(session)}>
              <h3>{session.movieTitle}</h3>
              <p>Date: {session.date}</p>
              <p>Lieu: {session.location}</p>
              <p>Langues: {session.vostfr ? session.vostfr.join(', ') : 'Non spécifié'}</p>
              <p>Équipements: {session.equipment.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>Aucun résultat trouvé</p>
        )}
      </div>

      {showPopup && (
        <PopUpDetails session={selectedSession} onClose={closePopUp} onReserve={handleReservation} />
      )}
    </div>
  );
};

export default SearchSessionsPage;
