import React, { useContext } from 'react'
import { MovieContext } from '../../store/movieContext'
import { PrivateMovie } from '../../types/types';
import "./PrivateWatchingList.scss"




const PrivateWatchingList = () => {
    const { privateMovies } = useContext(MovieContext)
    console.log(privateMovies)

    return (
        <div className='private-wrapper'>
            <h1 className='private-wrapper-title'>Add Aditional Movies You Would Like To Watch</h1>
            <div className='private-add-input'>
                <input type="text" />
                <input type="submit" />
            </div>
            {privateMovies.map((movie: PrivateMovie) => (
                <div className='private-item' key={movie.id}>{movie.title}</div>
            ))}
        </div>
    )
}

export default PrivateWatchingList