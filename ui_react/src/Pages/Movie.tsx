import { useLoaderData, useLocation } from "react-router-dom";
import { Form, Field } from "react-final-form";
import Card from "../Components/Card";
import { MovieType } from "../types";
import "./Movie.css";

const Movie = () => {
  const { pathname } = useLocation();
  const medias: MovieType[] = useLoaderData() as MovieType[];
  const mediaType = pathname === "/series" ? "Series" : "Movies";
  const maxYear = new Date().getFullYear() + 5;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1>{mediaType}</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <>
              <label>Search for Title: </label>
              <Field name="searchTitle" component="input" type="text" />
            </>
            <>
              <label>Search for Year: </label>
              <Field
                name="searchYear"
                component="input"
                type="number"
                min={1900}
                max={maxYear}
              />
            </>
            <button type="submit">Search</button>
          </form>
        )}
      />
      <div className="cards_container">
        {medias.map((media) => (
          <Card
            key={media.id}
            posterUrl={media.posterUrl}
            title={media.title}
            pathName={pathname}
          />
        ))}
      </div>
    </>
  );
};

export function MovieLodaer(): Promise<MovieType[]> {
  return fetch("/api/movies").then((res) => res.json());
}

export default Movie;
