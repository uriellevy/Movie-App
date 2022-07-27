import React, {useContext} from 'react'
import { FaSearch } from 'react-icons/fa';
import { MovieContext } from '../../store/movieContext';
import { Movie } from '../../types/types';


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
                            <li className='movie-item-wrapper' key={movie.id}>
                                <img className='movie-img' src={movie.image} />
                                <div className='bottom-wrapper'>
                                    <div className='details'>
                                        <div>{`Title:${movie.title}`}</div>
                                        <div>{`Year:${movie.year}`}</div>
                                        <div>{`IMDB Rating:${movie.imDbRating}`}</div>
                                        <div>{`Rank:${movie.rank}`}</div>
                                        <div>{`Crew:${movie.crew}`}</div>
                                    </div>
                                    <button className='btn-delete'>Delete</button>
                                </div>
                            </li>
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
