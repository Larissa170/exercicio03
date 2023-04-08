import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";

export function useMovies () {

  const [movies,setMovies] = useState([]);

  useEffect(() => {

    MoviesService.getMovies().then(({data}) => {
      const updateMovies = data.results.map((movie) =>({
        ...movie,
        image_url:`https://image.tmdb.org/t/p/w200${movie.poster_path}`
      }));

      setMovies(updateMovies);

    });
    
  },[]);

  return movies

}