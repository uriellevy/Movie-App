import React, { useContext } from 'react'
import { MovieContext } from '../../store/movieContext'
import { Movie } from '../../types/types'

interface FavoritesListItemProps {
    movie: Movie
    key: string
}

const FavoritesListItem = (props: FavoritesListItemProps) => {
    const { setFavoriteMovies, setTop250Movies } = useContext(MovieContext)
    const deleteMovieFromFavoritesHandler = (id: string) => {
        setFavoriteMovies((prev: Movie[]) => prev.filter((movie: Movie) => movie.id !== id))
        setTop250Movies((prev: Movie[]) => prev.map((movie: Movie) => movie.id === id ? { ...movie, isAddedToFavorite: false } : { ...movie }))
    }
    const crew = props.movie.crew.replace("(dir.)", "");
    return (
        <li className='movie-item-wrapper' key={props.movie.id}>
            <img className='movie-img' src={props.movie.image} />
            <div className='bottom-wrapper'>
                <div className='details'>
                    <div>{`Title:${props.movie.title}`}</div>
                    <div>{`Year:${props.movie.year}`}</div>
                    <div>{`IMDB Rating:${props.movie.imDbRating}`}</div>
                    <div>{`Rank:${props.movie.rank}`}</div>
                    <div>{`Crew:${crew}`}</div>
                </div>
            </div>
            <div className='homeview-btn-wrapper'>
                <button className='btn-delete' onClick={() => deleteMovieFromFavoritesHandler(props.movie.id)}>Delete</button>
                <button className='btn-trailer' >Trailer</button>
            </div>
        </li>
    )
}

export default FavoritesListItem