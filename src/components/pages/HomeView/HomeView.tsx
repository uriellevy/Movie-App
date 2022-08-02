import React, { useContext } from 'react'
import "./HomeView.scss";
import { Rings } from "react-loader-spinner";
import HomeViewListItem from './HomeViewListItem';
import { MovieContext } from '../../store/movieContext';
import "./HomeView.scss";
import { Movie } from '../../types/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchBar from '../../utils/SearchBar';


const HomeView = () => {
  const { top250Movies, searchByName } = useContext(MovieContext)

  return (
    <div className="homeview-container">
      <SearchBar/>
      <h1>Top 250 movies</h1>
      <InfiniteScroll
        dataLength={top250Movies.length}
        next={top250Movies}
        hasMore={true}
        loader={<Rings color='#00BFFF' height={80} width={80} />}
      >

        <ul className='movie-list-wrapper'>
          {top250Movies.length !== 0 ?
            top250Movies.filter((movie: Movie) => movie.title.toLocaleLowerCase().includes(searchByName)).map((movie: Movie) => (
              <HomeViewListItem key={movie.id} movie={movie} />
            )) :
            <Rings color="#00BFFF" height={80} width={80} />
          }

        </ul>
      </InfiniteScroll>

    </div>
  )
}

export default HomeView