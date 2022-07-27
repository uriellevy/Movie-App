import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "./HomeView.scss";
import { Rings } from "react-loader-spinner";
import HomeViewListItem from './HomeViewListItem';
import { MovieContext } from '../../store/movieContext';
import "./HomeView.scss";
import { Movie } from '../../types/types';

const HomeView = () => {
  const {top250Movies, searchByName, searchByNameChangeHandler} = useContext(MovieContext)
 

  return (
    <div className="homeview-container">
      <div className="homeview-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="search by movie name..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchByNameChangeHandler(e.target.value)}
        />
      </div>
      <h1>{`Top 250 movies`}</h1>

      <ul className='movie-list-wrapper'>
        {top250Movies.length !== 0 ?
        top250Movies.filter((movie: Movie) => movie.title.toLocaleLowerCase().includes(searchByName)).map((movie: Movie) => (
          <HomeViewListItem key={movie.id} movie={movie}/>
        )):
        <Rings color="#00BFFF" height={80} width={80} />
        }
        
      </ul>

    </div>
  )
}

export default HomeView