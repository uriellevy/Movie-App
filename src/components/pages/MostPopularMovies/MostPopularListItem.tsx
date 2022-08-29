import React, { useContext } from 'react';
import { MovieContext } from '../../store/movieContext';
import { Movie } from '../../types/types';
import RatingDisplay from '../../utils/ratingDisplay';
import {texts} from '../../../consts';

interface MostPopularListItemProps {
    movie: Movie
}

const MostPopularListItem = ({movie}: MostPopularListItemProps) => {
    const {TRAILER_TEXT, ADD_TEXT}= texts;
    const {image, title, year, imDbRating, rank, crew, id, isAddedToFavorite} = movie;
    const { mostPopularMovies, setMostPopularMovies, setFavoriteMovies, getTrailer, backgroundOpacity } = useContext(MovieContext);
    const crewTitle = crew?.replace('(dir.)', '');

    const addMovieToFavoritesHandler = (id: string) => {
        const chosenMovieToFavorites = mostPopularMovies.find((movie: Movie) => movie.id === id);
        if (!chosenMovieToFavorites.isAddedToFavorite) {
            setFavoriteMovies((prev: Movie[]) => [...prev, { ...chosenMovieToFavorites, isAddedToFavorite: true }]);
            setMostPopularMovies((prev: Movie[]) => prev.map((movie: Movie) => movie.id === id ? { ...movie, isAddedToFavorite: true } : { ...movie }))
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
                <button className={isAddedToFavorite ? 'btn-disable' : 'btn-add'} onClick={() => addMovieToFavoritesHandler(id)}>{ADD_TEXT}</button>
                <button className='btn-trailer' onClick={() => getTrailer(id)}>{TRAILER_TEXT}</button>
            </div>
        </li>
    )
}

export default MostPopularListItem