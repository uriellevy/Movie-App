import React, { useContext } from 'react'
import { MovieContext } from '../../store/movieContext';
import { Movie } from '../../types/types';
import SearchBar from '../../utils/SearchBar';
import FavoritesListItem from './FavoritesListItem';
import {texts} from '../../../consts';


const Favorites = () => {
    const { favoriteMovies, searchByName } = useContext(MovieContext)
    const {FAVORITES_EMPTY} = texts;
    return (
        <>
            <div className="homeview-container">
                <SearchBar />
                <ul className='movie-list-wrapper'>
                    {favoriteMovies.length !== 0 ?
                        favoriteMovies.filter((movie: Movie) => movie.title.toLowerCase().includes(searchByName)).map((movie: Movie) => (
                            <FavoritesListItem key={movie.id} movie={movie} />
                        )) :
                        <h1>{FAVORITES_EMPTY}</h1>
                    }
                </ul>

            </div>
        </>
    )
}

export default Favorites

