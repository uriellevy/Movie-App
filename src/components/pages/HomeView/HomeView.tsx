import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import "./HomeView.scss";
import { Rings } from "react-loader-spinner";
import HomeViewListItem from './HomeViewListItem';
import { MovieContext } from '../../store/movieContext';
import "./HomeView.scss";
import { Movie } from '../../types/types';

const HomeView = () => {
  const {top250Movies, setTop250Movies} = useContext(MovieContext)

  return (
    <div className="homeview-container">
      <div className="homeview-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="search by movie name..."
        />
      </div>
      <h1>{`Top 250 movies`}</h1>

      <ul className='movie-list-wrapper'>
        {top250Movies ?
        top250Movies.map((movie: Movie) => (
          <HomeViewListItem key={movie.id} movie={movie}/>
        )):
        <Rings color="#00BFFF" height={80} width={80} />
        }
        
      </ul>

    </div>
  )
}

export default HomeView