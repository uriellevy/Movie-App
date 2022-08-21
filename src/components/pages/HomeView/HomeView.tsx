import React, { useContext, useState } from 'react'
import "./HomeView.scss";
import { Rings } from "react-loader-spinner";
import HomeViewListItem from './HomeViewListItem';
import { MovieContext } from '../../store/movieContext';
import "./HomeView.scss";
import { Movie } from '../../types/types';
import SearchBar from '../../utils/SearchBar';


const HomeView = () => {
  const { top250Movies, searchByName } = useContext(MovieContext)
  const [fontSize, setFontSize] = useState<number>(10);
  const fontSizeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setFontSize((prev) => prev = value)
  }
  console.log(fontSize)
  return (
    <div className="homeview-container">
      <SearchBar />
      <h1>Top 250 movies</h1>
      <div className="slider-wrapper">
        <span className="fontsize big">A</span>
        <input type="range" min="6" max="12" value={fontSize}  onChange={fontSizeChangeHandler}></input>
        <span className="fontsize small">a</span>
      </div>
      <ul className='movie-list-wrapper'>
        {top250Movies.length !== 0 ?
          top250Movies.filter((movie: Movie) => movie.title.toLocaleLowerCase().includes(searchByName)).map((movie: Movie) => (
            <HomeViewListItem key={movie.id} movie={movie} fontSize={fontSize} />
          )) :
          <Rings color="#00BFFF" height={80} width={80} />
        }
      </ul>
    </div>
  )
}

export default HomeView