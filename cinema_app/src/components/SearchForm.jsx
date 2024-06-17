import React, { useState } from 'react';
import './SearchForm.css'; // Assurez-vous d'inclure votre fichier CSS

const SearchForm = ({ onSearch }) => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [vostfr, setVostfr] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');

  const handleCheckboxChange = (e, setState, state) => {
    const { value, checked } = e.target;
    if (checked) {
      setState([...state, value]);
    } else {
      setState(state.filter((item) => item !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ date, location, vostfr, equipment, movieTitle });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="movieTitle">Titre du film:</label>
        <input
          type="text"
          id="movieTitle"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
      </div>

      <div className="form-group row">
        <div className="col">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="location">Ville ou Code Postal:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Langues:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="VOSTFR"
              onChange={(e) => handleCheckboxChange(e, setVostfr, vostfr)}
            />
            VOSTFR
          </label>
          <label>
            <input
              type="checkbox"
              value="VF"
              onChange={(e) => handleCheckboxChange(e, setVostfr, vostfr)}
            />
            VF
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Équipements:</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="Dolby Atmos"
              onChange={(e) => handleCheckboxChange(e, setEquipment, equipment)}
            />
            Dolby Atmos
          </label>
          <label>
            <input
              type="checkbox"
              value="Sièges inclinables"
              onChange={(e) => handleCheckboxChange(e, setEquipment, equipment)}
            />
            Sièges inclinables
          </label>
          <label>
            <input
              type="checkbox"
              value="IMAX"
              onChange={(e) => handleCheckboxChange(e, setEquipment, equipment)}
            />
            IMAX
          </label>
          <label>
            <input
              type="checkbox"
              value="3D"
              onChange={(e) => handleCheckboxChange(e, setEquipment, equipment)}
            />
            3D
          </label>
          <label>
            <input
              type="checkbox"
              value="4DX"
              onChange={(e) => handleCheckboxChange(e, setEquipment, equipment)}
            />
            4DX
          </label>
          <label>
            <input
              type="checkbox"
              value="Son DTS"
              onChange={(e) => handleCheckboxChange(e, setEquipment, equipment)}
            />
            Son DTS
          </label>
          <label>
            <input
              type="checkbox"
              value="Écrans courbes"
              onChange={(e) => handleCheckboxChange(e, setEquipment, equipment)}
            />
            Écrans courbes
          </label>
          <label>
            <input
              type="checkbox"
              value="Sièges Premium"
              onChange={(e) => handleCheckboxChange(e, setEquipment, equipment)}
            />
            Sièges Premium
          </label>
        </div>
      </div>

      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchForm;
