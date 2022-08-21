import React, { useContext } from 'react'
import { Rings } from 'react-loader-spinner'
import { MovieContext } from '../../store/movieContext'
import { Movie } from '../../types/types'
import MostPopularListItem from './MostPopularListItem'
import SearchBar from '../../utils/SearchBar'
import SliderInput from '../../utils/SliderInput'


const MostPopularMovies = () => {
    const { mostPopularMovies, searchByName} = useContext(MovieContext)
    
    return (
        <div className="homeview-container">
            <SearchBar/>
            <h1>Most Popular Movies</h1>
            <SliderInput/>
                <ul className='movie-list-wrapper'>
                    {mostPopularMovies.length !== 0 ?
                        mostPopularMovies.filter((movie: Movie) => movie.title.toLocaleLowerCase().includes(searchByName)).map((movie: Movie) => (
                            <MostPopularListItem key={movie.id} movie={movie} />
                        )) :
                        <Rings color="#00BFFF" height={80} width={80} />
                    }
                </ul>
        </div>
    )
}

export default MostPopularMovies