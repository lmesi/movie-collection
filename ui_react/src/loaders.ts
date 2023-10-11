import {
  CollectionType,
  MovieType,
  SeriesType,
  HomeLoaderType,
  MovieDetailsLoaderType,
  SeriesDetailsLoaderType,
} from "./types";

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

const movieDetailsLoader: MovieDetailsLoaderType = async (
  id: string | undefined
) => {
  if (id) {
    const collections = await (await fetch("/api/collections")).json();
    const movie = await (await fetch(`/api/movies/${id}`)).json();

    return {
      collections,
      movie,
    };
  }

  return await new Promise(() => []);
};

const seriesLoader = async (): Promise<SeriesType[]> => {
  return await (await fetch("/api/series")).json();
};

const seriesDetailsLoader: SeriesDetailsLoaderType = async (
  id: string | undefined
) => {
  if (id) {
    const collections = await (await fetch("/api/collections")).json();
    const series = await (await fetch(`/api/series/${id}`)).json();

    return {
      collections,
      series,
    };
  }
  return new Promise(() => []);
};

const collectionsLoader = async (): Promise<CollectionType[]> => {
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
