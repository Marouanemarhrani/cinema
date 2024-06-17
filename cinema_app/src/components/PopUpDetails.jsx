import React from 'react';
import './PopUpDetails.css';

const PopUpDetails = ({ session, onClose, onReserve }) => {
  const { movieTitle, totalSeats, availableSeats, price, cinemaLocation } = session;

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{movieTitle}</h2>
        <p>Nombre total de places : {totalSeats}</p>
        <p>Places disponibles : {availableSeats}</p>
        <p>Tarif pour une personne : {price}</p>
        <p>Emplacement du cinéma : {cinemaLocation}</p>
        <button onClick={onReserve}>Réserver une place</button>
      </div>
    </div>
  );
};

export default PopUpDetails;
