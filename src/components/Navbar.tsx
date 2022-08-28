import { NavLink } from "react-router-dom";
import "./Navbar.scss"
import { MdLocalMovies } from "react-icons/md"
import {texts} from '../consts';

const Nav = () => {
  const {NAVBAR_HOME, NAVBAR_IMDB, NAVBAR_FAVORITES, NAVBAR_MOST_POPULAR, NAVBAR_PRIVATE} = texts;
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <MdLocalMovies className='logo-icon' />
        <h1 className="logo-title">{NAVBAR_IMDB}</h1>
      </div>

      <ul className="nav-list">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          {NAVBAR_HOME}
        </NavLink>
        <NavLink
          to="/favorites"
          // className="nav-link"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          {NAVBAR_FAVORITES}
        </NavLink>
        <NavLink
          to="/mostPopular"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          {NAVBAR_MOST_POPULAR}
        </NavLink>
        <NavLink
          to="/privateWatchingList"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          {NAVBAR_PRIVATE}
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav