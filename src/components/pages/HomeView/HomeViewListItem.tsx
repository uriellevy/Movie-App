import React, {useContext} from 'react'
import { MovieContext } from '../../store/movieContext'
import { Movie } from '../../types/types'
import "./HomeViewListItem.scss"

interface HomeViewListItemProps {
    movie: Movie
    key: string | undefined
}

const HomeMovieItem = (props: HomeViewListItemProps) => {
  const crew = props.movie.crew?.replace('(dir.)', '')
  const {top250Movies, setTop250Movies ,setFavoriteMovies, favoriteMovies} = useContext(MovieContext)

  const addMovieToFavoritesHandler = (id: string) => {
    const addedObject = top250Movies.find((movie:Movie) => movie.id === id);
    if (!addedObject.isAddedToFavorite) {
        setFavoriteMovies((prev: Movie[]) => [...prev, {...addedObject, isAddedToFavorite: true}]);
        setTop250Movies((prev: Movie[]) => prev.map((movie:Movie) => movie.id === id ? {...movie, isAddedToFavorite: true} : {...movie}))
    } 
  }
//   const addMovieToFavoritesHandler = (id: string) => {
//     const addedObject = top250Movies.find((movie:Movie) => movie.id === id);
//     if (!addedObject.isAddedToFavorite) {
//         setFavoriteMovies((prev: Movie[]) => [...prev, {...addedObject, isAddedToFavorite: true}]);
//         setTop250Movies((prev: Movie[]) => (
//              prev.map((obj:Movie) => {
//                 if (obj.id === id) {
//                     return {...obj, isAddedToFavorite: true}
//                 } else {
//                     return obj
//                 }
//             })
//         ))
//     } 
//   }
  console.log(top250Movies)
  console.log(favoriteMovies)


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
        <button className='btn-add' onClick={() => addMovieToFavoritesHandler(props.movie.id)}>Add</button>
      </div>
    </li>
  )
}

export default HomeMovieItem