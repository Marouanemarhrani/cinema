import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';

const Home = () => {
  // Données de démonstration pour les films et les offres spéciales
  const latestMovies = [
    {
      id: 1,
      title: 'Dune',
      image: 'https://fr.web.img5.acsta.net/c_310_420/pictures/21/08/10/12/20/4633954.jpg',
    },
    {
      id: 2,
      title: 'Mad Max Furiosa',
      image: 'https://fr.web.img4.acsta.net/c_310_420/img/bd/b1/bdb11f06bd2f0392cfc2bf9f64ecca1d.jpg',
    },
    {
      id: 3,
      title: 'The Fall Guy',
      image: 'https://fr.web.img6.acsta.net/c_310_420/o_club-allocine-2024-310x420.png_0_se/pictures/24/03/22/08/41/0670281.jpg',
    },
    {
      id: 4,
      title: 'Vice-Versa 2',
      image: 'https://fr.web.img5.acsta.net/c_310_420/img/f5/4c/f54c3310f101fe8ae4bba9e566bca1b5.jpg',
    },
  ];

  const specialOffers = [
    {
      id: 1,
      title: 'Offre Cinema Gaumont',
      description: 'Réduction spéciale sur les billets IMAX',
    },
    {
      id: 2,
      title: 'Offre UGC',
      description: '2 billets pour le prix d\'un le mardi',
    },
  ];

  // Configuration du carrousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <section className="promotion">
        <h2>Derniers Films</h2>
        <Slider {...sliderSettings}>
          {latestMovies.map(movie => (
            <div key={movie.id} className="movie-slide">
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </Slider>
        <div className="special-offers">
          <h3>Offres Spéciales</h3>
          <ul>
            {specialOffers.map(offer => (
              <li key={offer.id}>
                <strong>{offer.title}</strong>
                <p>{offer.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
