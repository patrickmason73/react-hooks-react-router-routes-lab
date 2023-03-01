import React from "react";
import { movies } from "../data";

function Movies() {

const displayMovies = movies.map((movie) => {
  const movieGenres = movie.genres.map((genre) => {
    return (
    <li>
      {genre}
    </li>
    )
  })
  return (
    <div key={movie.title}>
      Title: {movie.title}
      Time: {movie.time} minutes
      <ul>
      {movieGenres}
    </ul>
   </div>
  )
})



  return (
  <div>
    <h1>Movies Page</h1>
      {displayMovies}
    
  </div>
  )
}

export default Movies;
