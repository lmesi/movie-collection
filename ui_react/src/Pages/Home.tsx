import { useState } from "react";
import MediaList from "../Components/MediaList";
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
  const [shouldShowCollections] = useState(false);
  const { collections, movies, series } = useLoaderData() as loaderType;

  return (
    <div>
      <MediaList
        mediaType="collections"
        shouldShowMedias={shouldShowCollections}
        medias={collections}
      />
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
