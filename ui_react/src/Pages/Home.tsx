import { useState } from "react";
import MediaList from "../Components/MediaList";
import Card from "../Components/Card";
import CardSvg from "../assets/checklist.svg";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import { CollectionType, MovieType, SeriesType } from "../types";

type loaderType = {
  collections: CollectionType[];
  movies: MovieType[];
  series: SeriesType[];
};

function Home() {
  const [shouldShowMovies] = useState(false);
  const [shouldShowSeries] = useState(false);
  const { collections, movies, series } = useLoaderData() as loaderType;

  return (
    <div className="content-container">
      <>
        <h2>Collections</h2>
        <div className="home-collection-container">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              posterUrl={CardSvg}
              title={collection.title}
              id={collection.id}
              pathName="/collections"
            />
          ))}
        </div>
      </>
      <MediaList
        mediaType="movies"
        shouldShowMedias={shouldShowMovies}
        medias={movies}
      />
      <MediaList
        mediaType="series"
        shouldShowMedias={shouldShowSeries}
        medias={series}
      />
    </div>
  );
}

export default Home;
