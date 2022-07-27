import React, {useContext} from 'react'
import { FaSearch } from 'react-icons/fa';
import { MovieContext } from '../../store/movieContext';
import { Movie } from '../../types/types';
import FavoritesListItem from './FavoritesListItem';


const Favorites = () => {
  const {favoriteMovies} = useContext( MovieContext)
  
    return (
        <>
            <div className="homeview-container">
                <div className="homeview-search">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="search by movie name..."
                    />
                </div>
                <h1>{`Favorites`}</h1>
                <ul className='movie-list-wrapper'>
                    {favoriteMovies.length !== 0 ?
                        favoriteMovies.map((movie: Movie) => (
                           <FavoritesListItem key={movie.id} movie={movie}/>
                        )) :
                        <h2>No favorites selected</h2>
                    }
                </ul>

            </div>
        </>
    )
}

export default Favorites

function dispatch(arg0: any): void {
    throw new Error('Function not implemented.');
}
