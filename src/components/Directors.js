import React from "react";
import { directors } from "../data";

function Directors() {

const displayDirectors = directors.map((director) => {
  let directorMovies = director.movies.map((movie) => {
    return (
      <li>
        {movie}
      </li>
    )
  })
  return (
    <div key={director.name}>
      {director.name}
      <ul>
    {directorMovies}
      </ul>
    </div>
  )
})

  return <div>
    <h1>Directors Page</h1>
    {displayDirectors}
    </div>;
}

export default Directors;
