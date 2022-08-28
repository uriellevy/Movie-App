import React, { useContext} from 'react'
import { MovieContext } from '../../store/movieContext'
import { Movie } from '../../types/types'
import RatingDisplay from '../../utils/ratingDisplay'
import "./HomeViewListItem.scss"
import {texts} from '../../../consts';



interface HomeViewListItemProps {
    movie: Movie
}

const HomeMovieItem = ({movie}: HomeViewListItemProps) => {
    const { top250Movies, setTop250Movies, setFavoriteMovies, favoriteMovies, getTrailer, backgroundOpacity } = useContext(MovieContext)
    const {TRAILER_TEXT, DELETE_TEXT} = texts;
    const {image, title, year, imDbRating, rank, crew, isAddedToFavorite, id} = movie;
    const crewTitle = crew?.replace('(dir.)', '');

    const addMovieToFavoritesHandler = (id: string) => {
        const chosenMovieToFavorites = top250Movies.find((movie: Movie) => movie.id === id);
        if (!chosenMovieToFavorites.isAddedToFavorite) {
            setFavoriteMovies((prev: Movie[]) => [...prev, { ...chosenMovieToFavorites, isAddedToFavorite: true }]);
            setTop250Movies((prev: Movie[]) => prev.map((movie: Movie) => movie.id === id ? { ...movie, isAddedToFavorite: true } : { ...movie }))
        }
    }

    return (
        <li className='movie-item-wrapper' style={{opacity: backgroundOpacity * 0.1}}>
            <img className='movie-img' src={image} />
            <div className='bottom-wrapper'>
                <div className='details'>
                    <div>{`Title:${title}`}</div>
                    <div>{`Year:${year}`}</div>
                    <RatingDisplay rating={imDbRating}/>
                    <div>{`Rank:${rank}`}</div>
                    <div>{`Crew:${crewTitle}`}</div>
                </div>
            </div>
            <div className='homeview-btn-wrapper'>
                <button className={isAddedToFavorite ? 'btn-disable' : 'btn-add'} onClick={() => addMovieToFavoritesHandler(id)}>{DELETE_TEXT}</button>
                <button className='btn-trailer' onClick={() => getTrailer(id)} >{TRAILER_TEXT}</button>
            </div>
        </li>
    )
}

export default HomeMovieItem