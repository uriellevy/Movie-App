import React, { useContext } from 'react'
import { MovieContext } from '../../store/movieContext';
import { Movie } from '../../types/types';
import SearchBar from '../../utils/SearchBar';
import FavoritesListItem from './FavoritesListItem';


const Favorites = () => {
    const { favoriteMovies, searchByName } = useContext(MovieContext)

    return (
        <>
            <div className="homeview-container">
                <SearchBar />
                <ul className='movie-list-wrapper'>
                    {favoriteMovies.length !== 0 ?
                        favoriteMovies.filter((movie: Movie) => movie.title.toLowerCase().includes(searchByName)).map((movie: Movie) => (
                            <FavoritesListItem key={movie.id} movie={movie} />
                        )) :
                        <h1>No favorites selected</h1>
                    }
                </ul>

            </div>
        </>
    )
}

export default Favorites

