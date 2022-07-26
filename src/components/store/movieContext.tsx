import React, { useState, useEffect, createContext } from "react";

interface movieContext {
    name: string
}

export const MovieContext = createContext<any | null>(null);

export const MovieProvider = (props: any) => {
    const [top250Movies, setTop250Movies] = useState<any>([])

    const get250TopMovies = async () => {
        const res = await fetch("https://imdb-api.com/en/API/Top250Movies/k_y5o4o48d");
        const data = res.json();
        console.log(data);
      };

      useEffect(() => {
        get250TopMovies()
      }, []);

      const value = {
        top250Movies,
        setTop250Movies,
      };
    
      return (
        <MovieContext.Provider value="fggffg">
          {props.children}
        </MovieContext.Provider>
      );
}
