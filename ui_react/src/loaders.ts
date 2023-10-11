import { CollectionType, MovieType, SeriesType } from "./types";

type HomeLoaderType = () => Promise<{
  collections: CollectionType[];
  movies: MovieType[];
  series: SeriesType[];
}>;

const homeLoader: HomeLoaderType = async () => {
  const collections = await (
    await fetch("/api/collections?isLimited=true")
  ).json();

  const movies = await (await fetch("/api/movies?isLimited=true")).json();
  const series = await (await fetch("/api/series?isLimited=true")).json();

  return {
    collections,
    movies,
    series,
  };
};

const movieLodaer = async (): Promise<MovieType[]> => {
  return await (await fetch("/api/movies")).json();
};

const seriesLoader = async (): Promise<SeriesType[]> => {
  return await (await fetch("/api/series")).json();
};

const collectionsLoader = async (): Promise<CollectionType> => {
  return await (await fetch("/api/collections")).json();
};

export { homeLoader, movieLodaer, seriesLoader, collectionsLoader };

/**
 * TODO
 * Promise.all()
 */
