import React, { useContext } from 'react';
import { MovieContext } from '../../store/movieContext';
import { Movie } from '../../types/types';
import SearchBar from '../../utils/SearchBar';
import FavoritesListItem from './FavoritesListItem';
import { texts } from '../../../consts';


const Favorites = () => {
    const { FAVORITES_EMPTY, FAVORITES } = texts;
    const { favoriteMovies, searchByName } = useContext(MovieContext)
    console.log('favorites')
    const favoriteMovieList = favoriteMovies.length !== 0 ?
    favoriteMovies.filter((movie: Movie) => movie.title.toLowerCase().includes(searchByName)).map((movie: Movie) => (
        <FavoritesListItem key={movie.id} movie={movie} />
    )) :
    <h1>{FAVORITES_EMPTY}</h1>;

    return (
        <>
            <div className="homeview-container">
                <SearchBar />
                <h1>{FAVORITES}</h1>
                <ul className='movie-list-wrapper'>
                    {favoriteMovieList}
                </ul>

            </div>
        </>
    )
}

export default Favorites

