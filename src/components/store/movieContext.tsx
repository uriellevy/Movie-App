import React, { useState, useEffect, createContext } from "react";
import { Movie } from "../types/types";







export const MovieContext = createContext<any>(null);

export const MovieProvider = (props: any) => {
    const [top250Movies, setTop250Movies] = useState<Movie[] | null>([])
    const [favoriteMovies, setFavoriteMovies] = useState<Movie[] | null>([])
    const [searchByName, setSearchByName] = useState<string | undefined>('')

    const get250TopMovies = async () => {
        const res = await fetch("https://imdb-api.com/en/API/Top250Movies/k_y5o4o48d");
        const data = await res.json();
        const newData = data.items.map((movie: Movie) => ({...movie, isAddedToFavorite: false}));
        setTop250Movies(newData)
    };

      useEffect(() => {
        get250TopMovies()
      }, []);

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
      };
    
      return (
        <MovieContext.Provider value={value}>
          {props.children}
        </MovieContext.Provider>
      );
}
