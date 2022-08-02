import React, { useContext } from 'react'
import { Rings } from 'react-loader-spinner'
import { MovieContext } from '../../store/movieContext'
import { Movie } from '../../types/types'
import MostPopularListItem from './MostPopularListItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchBar from '../../utils/SearchBar'


const MostPopularMovies = () => {
    const { mostPopularMovies, searchByName} = useContext(MovieContext)
    return (
        <div className="homeview-container">
            <SearchBar/>
            <h1>Top 250 movies</h1>
            <InfiniteScroll
                dataLength={mostPopularMovies.length}
                next={mostPopularMovies}
                hasMore={true}
                loader={<Rings color='#00BFFF' height={80} width={80} />}
            >
                <ul className='movie-list-wrapper'>
                    {mostPopularMovies.length !== 0 ?
                        mostPopularMovies.filter((movie: Movie) => movie.title.toLocaleLowerCase().includes(searchByName)).map((movie: Movie) => (
                            <MostPopularListItem key={movie.id} movie={movie} />
                        )) :
                        <Rings color="#00BFFF" height={80} width={80} />
                    }

                </ul>
            </InfiniteScroll>
        </div>
    )
}

export default MostPopularMovies