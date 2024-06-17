import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CinemaList = () => {
  const [cinemas, setCinemas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies', {
      method: 'GET',
      credentials: 'include',  // Assure que les cookies sont inclus dans la requête
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Traitement des données reçues
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);
  

  return (
    <div>
      <h1>Cinemas</h1>
      <ul>
        {cinemas.map(cinema => (
          <li key={cinema._id}>{cinema.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CinemaList;
