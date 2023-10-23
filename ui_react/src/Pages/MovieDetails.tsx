import { useLoaderData, useParams } from "react-router-dom";
import { CollectionType, MovieType } from "../types";
import Dropdown from "../Components/Dropdown";

type loaderType = {
  collections: CollectionType[];
  movie: MovieType;
};

const MovieDetails = () => {
  const { collections, movie } = useLoaderData() as loaderType;
  const { id } = useParams();

  return (
    <div>
      <img src={movie.posterUrl} alt="movie poster" />
      <div>
        <h2>{movie.title}</h2>
        <p>Director(s): {movie.directors.join(", ")}</p>
        <p>Play time: {movie.length}</p>
        <p>Released in {movie.year}</p>
        <Dropdown collections={collections} mediaId={id} mediaType="movie" />
      </div>
    </div>
  );
};

export default MovieDetails;
