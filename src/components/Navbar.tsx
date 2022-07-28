import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.scss"
import {MdLocalMovies} from "react-icons/md"

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <MdLocalMovies className='logo-icon'/>
        <h1 className="logo-title">Imdb</h1>
      </div>

      <ul className="nav-list">
        <Link
          to="/"
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="nav-link"
        >
          Favorites
        </Link>
        <Link
          to="/mostPopular"
          className="nav-link"
        >
          Most Popular
        </Link>
      </ul>
    </nav>
  )
}

export default Nav