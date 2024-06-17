import React, { useState } from 'react';

const SearchForm = ({ onSearch, loading }) => {
  const [date, setDate] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [amenities, setAmenities] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appeler la fonction de recherche avec les critères actuels
    onSearch({ date, postalCode, amenities });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label>Date de Projection:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} disabled={loading} />

      <label>Code Postal:</label>
      <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} disabled={loading} />

      <label>Équipements Spécifiques:</label>
      <input type="text" value={amenities} onChange={(e) => setAmenities(e.target.value)} disabled={loading} />

      <button type="submit" disabled={loading}>Rechercher</button>
    </form>
  );
};

export default SearchForm;
