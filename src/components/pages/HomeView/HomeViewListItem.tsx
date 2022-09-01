import React, { lazy, useContext, useEffect} from 'react';
import { MovieContext } from '../../store/movieContext';
import { Movie } from '../../types/types';
import RatingDisplay from '../../utils/ratingDisplay';
import "./HomeViewListItem.scss";
import {texts} from '../../../consts';



interface HomeViewListItemProps {
    movie: Movie
}

const HomeMovieItem = ({movie}: HomeViewListItemProps) => {
    const {TRAILER_TEXT, ADD_TEXT} = texts;
    const {image, title, year, imDbRating, rank, crew, isAddedToFavorite, id} = movie;
    const { top250Movies, setTop250Movies, setFavoriteMovies, getTrailer, backgroundOpacity } = useContext(MovieContext)
    const crewTitle = crew?.replace('(dir.)', '');

    const addMovieToFavoritesHandler = (id: string) => {
        const chosenMovieToFavorites = top250Movies.find((movie: Movie) => movie.id === id);
        if (!chosenMovieToFavorites.isAddedToFavorite) {
            setFavoriteMovies((prev: Movie[]) => [...prev, { ...chosenMovieToFavorites, isAddedToFavorite: true }]);
            setTop250Movies((prev: Movie[]) => prev.map((movie: Movie) => movie.id === id ? { ...movie, isAddedToFavorite: true } : { ...movie }))
        }
    }

    useEffect(() => {

    })

    return (
        <li className='movie-item-wrapper' style={{opacity: backgroundOpacity * 0.1}}>
            <img className='movie-img' src={`${image}?w=30?h=50`} loading='lazy'/>
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
                <button className='btn-trailer' onClick={() => getTrailer(id)} >{TRAILER_TEXT}</button>
            </div>
        </li>
    )
}

export default HomeMovieItem