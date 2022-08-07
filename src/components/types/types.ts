export interface Movie {
    id: string,
    rank: string,
    title: string,
    fullTitle: string,
    year: string,
    image:string,
    crew: string,
    imDbRating: string,
    imDbRatingCount: string,
    isAddedToFavorite: boolean
  }

  export interface PrivateMovie {
    title: string
    id: number
  }
  
  export interface Store {
    movies: Movie[];
  }