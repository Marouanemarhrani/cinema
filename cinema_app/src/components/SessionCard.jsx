import React from 'react';

const SessionCard = ({ session }) => {
  return (
    <div className="session-card">
      <h3>{session.movieTitle}</h3>
      <p>Date: {session.date}</p>
      <p>Places Disponibles: {session.availableSeats}/{session.totalSeats}</p>
      <p>Tarif: {session.price} €</p>
      <p>Cinéma: {session.cinemaName}</p>
      <p>Adresse: {session.cinemaAddress}</p>
      <p>Équipements: {session.amenities}</p>
      {/* Ajoutez d'autres détails selon votre modèle de données */}
    </div>
  );
};

export default SessionCard;
