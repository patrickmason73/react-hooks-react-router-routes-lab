import React from "react";
import { actors } from "../data";

function Actors() {

const displayActors = actors.map((actor) => {
  let actorMovies = actor.movies.map((movie) => {
    return (
      <li>
        {movie}
      </li>
    )
  })
  return (
    <div key={actor.name}>
      {actor.name}
      <ul>
        {actorMovies}
      </ul>
    </div>
  )
})

  return <div>
  <h1>Actors Page</h1>
    {displayActors}
    </div>;
}

export default Actors;
