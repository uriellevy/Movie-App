import React, { useContext } from 'react';
import { Rings } from 'react-loader-spinner';
import { MovieContext } from '../../store/movieContext';
import { Movie } from '../../types/types';
import MostPopularListItem from './MostPopularListItem';
import SearchBar from '../../utils/SearchBar';
import {texts} from '../../../consts';


const MostPopularMovies = () => {
    const {MOST_POPULAR_MOVIES_TITLE} = texts;
    const { mostPopularMovies, searchByName} = useContext(MovieContext)
    return (
        <div className="homeview-container">
            <SearchBar/>
            <h1>{MOST_POPULAR_MOVIES_TITLE}</h1>
                <ul className='movie-list-wrapper'>
                    {mostPopularMovies.length !== 0 ?
                        mostPopularMovies.filter((movie: Movie) => movie.title.toLowerCase().includes(searchByName)).map((movie: Movie) => (
                            <MostPopularListItem key={movie.id} movie={movie} />
                        )) :
                        <Rings color="#00BFFF" height={80} width={80} />
                    }
                </ul>
        </div>
    )
}

export default MostPopularMovies