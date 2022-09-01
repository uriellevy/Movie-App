import { NavLink } from "react-router-dom";
import { MdLocalMovies, MdClose } from "react-icons/md";
import { texts } from '../consts';
import { HiMenuAlt3 } from 'react-icons/hi';
import UsewindowSize, { Size } from './customHooks/UsewindowSize';
import useBoolean from "./customHooks/UseBoolean";
import "./Navbar.scss";

const Nav = () => {
  const { NAVBAR_HOME, NAVBAR_IMDB, NAVBAR_FAVORITES, NAVBAR_MOST_POPULAR, NAVBAR_PRIVATE } = texts;
  const size: Size = UsewindowSize();
  const [isModalOpen, { setFalse, setTrue }] = useBoolean(false);
  const widthSmallerThan500 = size.width && size.width < 500;
  const ulClassName = !widthSmallerThan500 ? 'nav-list-simple' : (isModalOpen ? 'nav-modal' : 'nav-modal none');
  const showMenuIcon = !isModalOpen && widthSmallerThan500;

  return (
    <nav className={`nav-container`}>
      <NavLink className="nav-logo" to='/'>
        <MdLocalMovies className='logo-icon' />
        <h1 className="logo-title">{NAVBAR_IMDB}</h1>
      </NavLink>

      <ul className={ulClassName}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `active` : 'inactive')}
          onClick={setFalse}
        >
          {NAVBAR_HOME}
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          onClick={setFalse}
        >
          {NAVBAR_FAVORITES}
        </NavLink>
        <NavLink
          to="/mostPopular"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          onClick={setFalse}
        >
          {NAVBAR_MOST_POPULAR}
        </NavLink>
        <NavLink
          to="/privateWatchingList"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          onClick={setFalse}
        >
          {NAVBAR_PRIVATE}
        </NavLink>
        {widthSmallerThan500 && <MdClose className="btn-close" onClick={setFalse}/>}
      </ul>
      {showMenuIcon &&  <HiMenuAlt3 className="menu-icon" onClick={setTrue}/>}
    </nav>
  )
}

export default Nav