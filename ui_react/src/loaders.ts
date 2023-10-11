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

const movieDetailsLoader = async (id: string): Promise<MovieType> => {
  if (id) {
    return await (await fetch(`/api/movies/:${id}`)).json();
  }
  return await new Promise(() => []);
};

const seriesLoader = async (): Promise<SeriesType[]> => {
  return await (await fetch("/api/series")).json();
};

const seriesDetailsLoader = async (id: string): Promise<SeriesType> => {
  if (id) {
    return await (await fetch(`/api/series/:${id}`)).json();
  }
  return new Promise(() => []);
};

const collectionsLoader = async (): Promise<CollectionType> => {
  return await (await fetch("/api/collections")).json();
};

const collectionDetailsLoader = async (
  id: string | undefined
): Promise<CollectionType> => {
  if (id) {
    return await (await fetch(`/api/collections/${id}`)).json();
  }
  return await new Promise(() => []);
};

export {
  homeLoader,
  movieLodaer,
  seriesLoader,
  collectionsLoader,
  movieDetailsLoader,
  seriesDetailsLoader,
  collectionDetailsLoader,
};

/**
 * TODO
 * Promise.all()
 */
