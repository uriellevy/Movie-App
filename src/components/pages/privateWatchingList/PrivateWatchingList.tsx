import React, { useContext, useState } from 'react'
import { MovieContext } from '../../store/movieContext'
import { PrivateMovie } from '../../types/types';
import "./PrivateWatchingList.scss"




const PrivateWatchingList = () => {
    const { privateMovies, setPrivateMovies, capitilizeMovieName } = useContext(MovieContext)
    const [title, setTitle] = useState<string>('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const addMovieToPrivateList = () => {
        if (title !== "") {
            setPrivateMovies((prev: PrivateMovie[]) => [...prev, { title: capitilizeMovieName(title), id: Math.round(Math.random() * 1000) }]);
            setTitle("")
        }
    }

    const deleteMovieFromPrivateList = (id: number) => {
        setPrivateMovies((prev: PrivateMovie[]) => prev.filter((movie: PrivateMovie) => movie.id !== id))
    }




    return (
        <div className='private-wrapper'>
            <h2 className='private-wrapper-title'>Add Aditional Movies You Would Like To Watch</h2>
            <div className='private-add-input'>
                <input className='private-add-text' type="text" onChange={handleInputChange} value={title} placeholder="type movie..." />
                <input className='private-add-btn' type="submit" onClick={addMovieToPrivateList} value="Add" />
            </div>
            <ul className='private-list'>
                {privateMovies.map((movie: PrivateMovie) => (
                    <li className='private-item-wrapper' key={movie.id}>
                        <h2 className='private-title'>{movie.title}</h2>
                        <button className='private-btn-delete' onClick={() => deleteMovieFromPrivateList(movie.id)}>Delete</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default PrivateWatchingList