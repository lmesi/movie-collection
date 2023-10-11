import { useLoaderData } from "react-router-dom";
import { SeriesType } from "../types";

const SeriesDetails = () => {
  const series = useLoaderData() as SeriesType;
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
      </div>
    </div>
  );
};

export default SeriesDetails;
