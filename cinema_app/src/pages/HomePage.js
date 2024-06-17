import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css'; 

const Home = () => {
  return (
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

      <section className="introduction">
        <h2>Notre Mission</h2>
        <p>XXXX (nom de votre entreprise) souhaite réinventer l'expérience cinématographique en transformant les cinémas en centres d'événements multifonctionnels.</p>
      </section>

      <section className="features">
        <h2>Caractéristiques Clés</h2>
        <p>Nous offrons une technologie avancée comme le son Dolby, des sièges inclinables, et bien plus encore pour une expérience immersive.</p>
      </section>

      <section className="cta">
        <h2>Commencez dès maintenant</h2>
        <div className="cta-buttons">
          <Link to="/signup" className="button">S'inscrire</Link>
          <Link to="/login" className="button">Se connecter</Link>
        </div>
      </section>

      <section className="promotion">
        <h2>Derniers Films</h2>
        <div className="movie-grid">
          {/* Affichage des derniers films avec leurs images et titres */}
        </div>
        <div className="special-offers">
          <h3>Offres Spéciales</h3>
          {/* Affichage des offres spéciales ou événements à venir */}
        </div>
      </section>

      <footer>
        <ul className="footer-links">
          <li><Link to="/terms">Conditions d'utilisation</Link></li>
          <li><Link to="/privacy">Politique de confidentialité</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="social-icons">
          {/* Icônes de réseaux sociaux */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
