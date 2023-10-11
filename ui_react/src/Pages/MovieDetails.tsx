import { useLoaderData } from "react-router-dom";
import { MovieType } from "../types";

const MovieDetails = () => {
  const movie = useLoaderData() as MovieType;
  return (
    <div>
      <img src={movie.posterUrl} alt="movie poster" />
      <div>
        <h2>{movie.title}</h2>
        <p>Director(s): {movie.directors.join(", ")}</p>
        <p>Play time: {movie.length}</p>
        <p>Released in {movie.year}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
