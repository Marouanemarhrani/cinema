import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import SessionList from '../components/SessionList';
import axios from 'axios';

const SearchSessionsPage = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fonction pour effectuer la recherche de séances
  const searchSessions = async (criteria) => {
    setLoading(true);
    try {
      // Remplacez l'URL par votre endpoint de recherche de séances
      const response = await axios.get(`http://localhost:5000/api/sessions`, {
        params: criteria,
      });
      setSessions(response.data);
    } catch (error) {
      console.error('Error fetching sessions:', error);
      setSessions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Exemple de recherche initiale (peut être modifié ou supprimé)
    searchSessions({ date: '2024-07-01', postalCode: '75001', amenities: 'dolby' });
  }, []); // Déclencher la recherche initiale au chargement de la page

  return (
    <div className="search-sessions">
      <h1>Rechercher des Séances</h1>
      <SearchForm onSearch={searchSessions} loading={loading} />
      <SessionList sessions={sessions} loading={loading} />
    </div>
  );
};

export default SearchSessionsPage;
