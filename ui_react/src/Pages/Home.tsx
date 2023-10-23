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
  const { collections, movies, series } = useLoaderData() as loaderType;

  return (
    <div className="content-container">
      <MediaList
        mediaType="collections"
        medias={collections}
        shouldShowTitle={true}
      />
      <MediaList mediaType="movies" medias={movies} />
      <MediaList mediaType="series" medias={series} />
    </div>
  );
}

export default Home;
