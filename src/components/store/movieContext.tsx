import React, { useState, useEffect, createContext } from "react";
import { Movie, PrivateMovie } from "../types/types";


export const MovieContext = createContext<any>(null);

export const MovieProvider = (props: any) => {
  const [top250Movies, setTop250Movies] = useState<Movie[] | null>([])
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[] | null>(() => {
    const localData = localStorage.getItem("favoritesCollection");
    return localData ? JSON.parse(localData) : []
  })
  const [searchByName, setSearchByName] = useState<string | undefined>('')
  const [mostPopularMovies, setMostPopularMovies] = useState<Movie[] | null>([])
  const [privateMovies, setPrivateMovies] = useState<PrivateMovie[] | null>([
    {title: "aaa", id: 1},
    {title: "bbb", id: 2},
    {title: "ccc", id: 3},
  ]);
  // console.log(privateMovies)
  const API_KEY = "k_y5o4o48d"


  const get250TopMovies = async () => {
    const res = await fetch(`https://imdb-api.com/en/API/Top250Movies/${API_KEY}`);
    const data = await res.json();
    const newData = data.items.map((movie: Movie) => ({ ...movie, isAddedToFavorite: false }));
    setTop250Movies(newData)
  };

  const getMostPopularMovies = async () => {
    const res = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`)
    const data = await res.json();
    const newData = data.items.map((movie:Movie) => ({...movie, isAddedToFavorite: false}));
    setMostPopularMovies(newData);
  }

  const getAllTrailers = async (id: string) => {
    const res = await fetch(`https://imdb-api.com/en/API/Trailer/k_y5o4o48d/${id}`)
    const data = await res.json();
    const url = data.link
    window.open(url);
  }

  useEffect(() => {
    get250TopMovies()
    getMostPopularMovies()
  }, []);
  
  useEffect(() => {
    localStorage.setItem("favoritesCollection", JSON.stringify(favoriteMovies))
  }, [favoriteMovies])


  
  const searchByNameChangeHandler = (input: string) => {
    setSearchByName(input)
  }

  const value = {
    top250Movies,
    setTop250Movies,
    searchByName,
    setSearchByName,
    searchByNameChangeHandler,
    favoriteMovies,
    setFavoriteMovies,
    mostPopularMovies,
    setMostPopularMovies,
    getAllTrailers,
    privateMovies,
    setPrivateMovies,
  };

  return (
    <MovieContext.Provider value={value}>
      {props.children}
    </MovieContext.Provider>
  );
}
