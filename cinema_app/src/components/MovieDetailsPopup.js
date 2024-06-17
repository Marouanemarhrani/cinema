// MovieDetailsPopup.js
import React from 'react';

const MovieDetailsPopup = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="movie-details-popup">
      <div className="popup-content">
        <h2>{movie.title}</h2>
        <p><strong>Synopsis:</strong> {movie.description}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Âge recommandé:</strong> {movie.age}</p>
        {/* Ajoutez d'autres détails du film ici */}
      </div>
    </div>
  );
};

export default MovieDetailsPopup;
