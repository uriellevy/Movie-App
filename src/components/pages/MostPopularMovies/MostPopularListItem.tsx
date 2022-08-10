import React, { useContext } from 'react'
import { MovieContext } from '../../store/movieContext'
import { Movie } from '../../types/types'

interface MostPopularListItemProps {
    movie: Movie
    key: string | undefined
}

const MostPopularListItem = (props: MostPopularListItemProps) => {
    const crew = props.movie.crew?.replace('(dir.)', '')
    const { mostPopularMovies, setMostPopularMovies, setFavoriteMovies, getAllTrailers } = useContext(MovieContext)

    const addMovieToFavoritesHandler = (id: string) => {
        const chosenMovieToFavorites = mostPopularMovies.find((movie: Movie) => movie.id === id);
        if (!chosenMovieToFavorites.isAddedToFavorite) {
            setFavoriteMovies((prev: Movie[]) => [...prev, { ...chosenMovieToFavorites, isAddedToFavorite: true }]);
            setMostPopularMovies((prev: Movie[]) => prev.map((movie: Movie) => movie.id === id ? { ...movie, isAddedToFavorite: true } : { ...movie }))
        }
    }
    return (
        <li className='movie-item-wrapper'>
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
                <button className={props.movie.isAddedToFavorite ? 'btn-disable' : 'btn-add'} onClick={() => addMovieToFavoritesHandler(props.movie.id)}>Add</button>
                <button className='btn-trailer' onClick={() => getAllTrailers(props.movie.id)}>Trailer</button>
            </div>
        </li>
    )
}

export default MostPopularListItem