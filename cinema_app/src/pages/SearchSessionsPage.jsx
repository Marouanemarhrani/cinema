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
        movieTitle: 'The Fall Guy',
        date: '2024-06-18',
        location: 'New York',
        vostfr: ['VOSTFR'],
        equipment: ['Dolby Atmos', 'Sièges inclinables'],
        cinema: 'Cinema A',
        image: 'https://fr.web.img6.acsta.net/c_310_420/o_club-allocine-2024-310x420.png_0_se/pictures/24/03/22/08/41/0670281.jpg',
      },
      {
        id: 2,
        movieTitle: 'Movie 2',
        date: '2024-06-19',
        location: 'Los Angeles',
        equipment: ['IMAX', '3D'],
        cinema: 'Cinema B',
        image: 'https://fr.web.img4.acsta.net/c_310_420/img/bd/b1/bdb11f06bd2f0392cfc2bf9f64ecca1d.jpg',
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
          <div className="movie-gallery">
            {searchResults.map((session) => (
              <div key={session.id} className="movie-item" onClick={() => openPopUp(session)}>
                <img src={session.image} alt={session.movieTitle} />
                <div className="movie-details">
                  <h3>{session.movieTitle}</h3>
                  <p>Lieu: {session.location}</p>
                  <p>Cinéma: {session.cinema}</p>
                </div>
              </div>
            ))}
          </div>
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
