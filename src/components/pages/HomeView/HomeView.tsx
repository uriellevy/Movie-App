import React, { useContext, useMemo } from 'react';
import "./HomeView.scss";
import { Rings } from "react-loader-spinner";
import HomeViewListItem from './HomeViewListItem';
import { MovieContext } from '../../store/movieContext';
import "./HomeView.scss";
import { Movie } from '../../types/types';
import SearchBar from '../../utils/SearchBar';
import {texts} from '../../../consts';


const HomeView = () => {
  const {HOME_VIEW_TITLE} = texts;
  const { top250Movies, searchByName, mostPopularMovies, favoriteMovies } = useContext(MovieContext)
  console.log('homeview')
  console.log(top250Movies)
  // console.log(mostPopularMovies)
  // console.log(favoriteMovies)
  const top250MoviesList =  top250Movies.length !== 0 ?
  top250Movies.filter((movie: Movie) => movie.title.toLocaleLowerCase().includes(searchByName)).map((movie: Movie) => (
    <HomeViewListItem key={movie.id} movie={movie} />
  )) :
  <Rings color="#00BFFF" height={80} width={80} />;
 
  return (
    <div className="homeview-container">
      <SearchBar />
      <h1>{HOME_VIEW_TITLE}</h1>
      <ul className='movie-list-wrapper'>
        {top250MoviesList}
      </ul>
    </div>
  )
}

export default HomeView