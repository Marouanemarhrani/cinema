import React from "react"
import './style/header.css'

const Header = () => {
    return (
        <header>
            <h1>CINEMA</h1>
            <ul>
                <a href="">
                    <li>Events</li>
                </a>
                <a href="">
                    <li>Cinema</li>
                </a>
                <a href="">
                    <li>Movie</li>
                </a>
                <a href="">
                    <li>Réservation</li>
                </a>
            </ul>
        </header>
    )
}

export default Header;