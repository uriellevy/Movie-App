import React, { useContext } from 'react';
import { MovieContext } from '../../store/movieContext';
import { Movie } from '../../types/types';
import RatingDisplay from '../../utils/ratingDisplay';
import {texts} from '../../../consts';

interface FavoritesListItemProps {
    movie: Movie
}

const FavoritesListItem = ({movie}: FavoritesListItemProps) => {
    const {TRAILER_TEXT, DELETE_TEXT} = texts;
    const {title, year, imDbRating, rank, crew, id, image} = movie;
    const { setFavoriteMovies, setTop250Movies, getTrailer, backgroundOpacity } = useContext(MovieContext)
    const crewTitle = crew.replace("(dir.)", "");
    const deleteMovieFromFavoritesHandler = (id: string) => {
        setFavoriteMovies((prev: Movie[]) => prev.filter((movie: Movie) => movie.id !== id))
        setTop250Movies((prev: Movie[]) => prev.map((movie: Movie) => movie.id === id ? { ...movie, isAddedToFavorite: false } : { ...movie }))
    }
    return (
        <li className='movie-item-wrapper' key={id} style={{opacity: backgroundOpacity * 0.1}}>
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
                <button className='btn-delete' onClick={() => deleteMovieFromFavoritesHandler(id)}>{DELETE_TEXT}</button>
                <button className='btn-trailer' onClick={() => getTrailer(id)}>{TRAILER_TEXT}</button>
            </div>
        </li>
    )
}

export default FavoritesListItem