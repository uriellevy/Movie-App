import React, { useState, useEffect, createContext } from "react";
import { Movie } from "../types/types";







export const MovieContext = createContext<any>(null);

export const MovieProvider = (props: any) => {
    const [top250Movies, setTop250Movies] = useState<Movie[] | null>([])

    const get250TopMovies = async () => {
        const res = await fetch("https://imdb-api.com/en/API/Top250Movies/k_y5o4o48d");
        const data = await res.json();
        const newData = data.items;
        setTop250Movies(newData)
    };

      useEffect(() => {
        get250TopMovies()
      }, []);

      const value = {
        top250Movies,
        setTop250Movies,
      };
    
      return (
        <MovieContext.Provider value={value}>
          {props.children}
        </MovieContext.Provider>
      );
}
