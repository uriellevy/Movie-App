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
  const [privateMovies, setPrivateMovies] = useState<PrivateMovie[]>(() => {
    const localData = localStorage.getItem("privateCollection");
    return localData ? JSON.parse(localData) : [];
  });
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

  useEffect(() => {
    localStorage.setItem("privateCollection", JSON.stringify(privateMovies))
  }, [privateMovies])


  
  const searchByNameChangeHandler = (input: string) => {
    setSearchByName(input)
  }

  const capitilizeMovieName = (movieTitle: string) => {
    return movieTitle.split(" ").map((title) => title.charAt(0).toLocaleUpperCase() + title.slice(1)).join(" ");
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
    capitilizeMovieName,
  };

  return (
    <MovieContext.Provider value={value}>
      {props.children}
    </MovieContext.Provider>
  );
}
