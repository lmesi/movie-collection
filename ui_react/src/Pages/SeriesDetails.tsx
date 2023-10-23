import { useLoaderData, useParams } from "react-router-dom";
import { CollectionType, SeriesType } from "../types";
import Dropdown from "../Components/Dropdown";

type loaderType = {
  collections: CollectionType[];
  series: SeriesType;
};

const SeriesDetails = () => {
  const { collections, series } = useLoaderData() as loaderType;
  const { id } = useParams();

  return (
    <div>
      <img src={series.posterUrl} alt="TV show poster" />
      <div>
        <h2>{series.title}</h2>
        <p>Creator(s): {series.directors.join(", ")}</p>
        <p>Episodes: {series.episodes}</p>
        <p>Seasons: {series.seasons}</p>
        <p>Average play time per episode: {series.length}</p>
        <p>
          Played between {series.startYear} - {series.endYear}
        </p>
        <Dropdown collections={collections} mediaId={id} mediaType="series" />
      </div>
    </div>
  );
};

export default SeriesDetails;
