import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss"
import { MdLocalMovies } from "react-icons/md"

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <MdLocalMovies className='logo-icon' />
        <h1 className="logo-title">Imdb</h1>
      </div>

      <ul className="nav-list">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          // className="nav-link"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Favorites
        </NavLink>
        <NavLink
          to="/mostPopular"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Most Popular
        </NavLink>
        <NavLink
          to="/privateWatchingList"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Private
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav