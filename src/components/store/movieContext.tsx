import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect, createContext } from "react";
import { Movie, PrivateMovie } from "../types/types";


export const MovieContext = createContext<any>(null);

export const MovieProvider = (props: any) => {
  const [top250Movies, setTop250Movies] = useState<Movie[] | null>(() => {
    const localData = localStorage.getItem("top250MoviesCollection");
    return localData ? JSON.parse(localData) : []
  })
  const [mostPopularMovies, setMostPopularMovies] = useState<Movie[] | null>(() => {
    const localData = localStorage.getItem("mostPopularMoviesCollection");
    return localData ? JSON.parse(localData) : []
  })
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[] | null>(() => {
    const localData = localStorage.getItem("favoritesCollection");
    return localData ? JSON.parse(localData) : []
  })
  const [privateMovies, setPrivateMovies] = useState<PrivateMovie[]>(() => {
    const localData = localStorage.getItem("privateCollection");
    return localData ? JSON.parse(localData) : [];
  });
  const [searchByName, setSearchByName] = useState<string | undefined>('')
  const [backgroundOpacity, setBackgroundOpacity] = useState<number>(10);
  const API_KEY = "k_y5o4o48d"


  const get250TopMovies = async () => {
    if(top250Movies?.length === 0) {
      const res = await fetch(`https://imdb-api.com/en/API/Top250Movies/${API_KEY}`);
      const data = await res.json();
      const newData = data.items.map((movie: Movie) => ({ ...movie, isAddedToFavorite: false }));
      setTop250Movies(newData)
    }else return
  }

  const getMostPopularMovies = async () => {
    if (mostPopularMovies?.length === 0) {
      const res = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`)
      const data = await res.json();
      const newData = data.items.map((movie:Movie) => ({...movie, isAddedToFavorite: false}));
      setMostPopularMovies(newData);
    }else return
  }

  const getTrailer = async (id: string) => {
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
    localStorage.setItem("top250MoviesCollection", JSON.stringify(top250Movies))
    localStorage.setItem("mostPopularMoviesCollection", JSON.stringify(mostPopularMovies))
  }, [favoriteMovies, top250Movies, mostPopularMovies])

  useEffect(() => {
    localStorage.setItem("privateCollection", JSON.stringify(privateMovies))
  }, [privateMovies])

  const searchByNameChangeHandler = (input: string) => {
    setSearchByName(input)
  }

  const capitilizeMovieName = (movieTitle: string) => {
    return movieTitle.split(" ").map((title) => title.charAt(0).toLocaleUpperCase() + title.slice(1)).join(" ");
  }

  const backgroundOpacityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setBackgroundOpacity((prev) => prev = value)
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
    getTrailer,
    privateMovies,
    setPrivateMovies,
    capitilizeMovieName,
    backgroundOpacity,
    setBackgroundOpacity,
    backgroundOpacityChangeHandler,
  };

  return (
    <MovieContext.Provider value={value}>
      {props.children}
    </MovieContext.Provider>
  );
}
