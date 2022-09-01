import React, { useContext, useRef } from 'react';
import { MovieContext } from '../../store/movieContext';
import { PrivateMovie } from '../../types/types';
import "./PrivateWatchingList.scss";
import { texts } from '../../../consts';


const PrivateWatchingList = () => {
    const { PRIVATE_WATCHING_TITLE, DELETE_TEXT } = texts;
    const { privateMovies, setPrivateMovies, capitilizeMovieName } = useContext(MovieContext)
    const titleInputRef = useRef<HTMLInputElement | null>(null);

    const addMovieToPrivateList = () => {
        const enteredTitle = titleInputRef.current?.value;
        if (enteredTitle !== '') {
            setPrivateMovies((prev: PrivateMovie[]) => [...prev, { title: capitilizeMovieName(enteredTitle), id: Math.round(Math.random() * 1000) }]);
        }
        titleInputRef.current!.value = '';
    }
    console.log('private list')

    const deleteMovieFromPrivateList = (id: number) => {
        setPrivateMovies((prev: PrivateMovie[]) => prev.filter((movie: PrivateMovie) => movie.id !== id))
    }

    return (
        <div className='private-wrapper'>
            <h1 className='private-wrapper-title'>{PRIVATE_WATCHING_TITLE}</h1>
            <div className='private-add-input'>
                <input className='private-add-text' type="text" ref={titleInputRef} placeholder="type movie..." />
                <input className='private-add-btn' type="submit" onClick={addMovieToPrivateList} value="Add" />
            </div>
            <ul className='private-list'>
                {privateMovies.map((movie: PrivateMovie) => (
                    <li className='private-item-wrapper' key={movie.id}>
                        <h2 className='private-title'>{movie.title}</h2>
                        <button className='private-btn-delete' onClick={() => deleteMovieFromPrivateList(movie.id)}>{DELETE_TEXT}</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default PrivateWatchingList