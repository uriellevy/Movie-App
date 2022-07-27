import React from 'react'
import { Movie } from '../../types/types'
import "./HomeViewListItem.scss"

interface HomeViewListItemProps {
    movie: Movie
    key: string | undefined
}

const HomeMovieItem = (props: HomeViewListItemProps) => {
  const crew = props.movie.crew?.replace('(dir.)', '')


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
        <button className='btn-add'>Add</button>
      </div>
    </li>
  )
}

export default HomeMovieItem