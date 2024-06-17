import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assurez-vous d'inclure votre fichier CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Cinéma</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/search">Recherche</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
