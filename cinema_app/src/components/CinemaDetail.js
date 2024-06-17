import React from 'react';
import { useParams } from 'react-router-dom';

const CinemaDetail = () => {
  const { id } = useParams();

  // Logique pour récupérer les détails du cinéma en utilisant l'ID

  return (
    <div>
      <h2>Cinema Details</h2>
      <p>Displaying details for cinema with ID: {id}</p>
      {/* Affichez ici les détails du cinéma */}
    </div>
  );
};

export default CinemaDetail;
