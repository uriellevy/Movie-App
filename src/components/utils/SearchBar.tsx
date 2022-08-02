import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MovieContext } from '../store/movieContext'


const SearchBar = () => {
  const { searchByNameChangeHandler } = useContext(MovieContext)

  return (
    <div className="homeview-search">
    <FaSearch className="search-icon" />
    <input
      type="text"
      placeholder="search by movie name..."
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchByNameChangeHandler(e.target.value)}
    />
  </div>
  )
}

export default SearchBar