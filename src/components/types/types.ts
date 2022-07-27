export interface Movie {
    id?: string,
    rank?: string,
    title?: string,
    fullTitle?: string,
    year?: string,
    image?:string,
    crew?: string,
    imDbRating?: string,
    imDbRatingCount?: string,
    addedToFavorite?: boolean
  }
  
  export interface Store {
    movies: Movie[];
  }