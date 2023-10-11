export type MediaType = {
  id: number;
  title: string;
  posterUrl?: string;
};

export type MovieType = {
  id: number;
  title: string;
  posterUrl: string;
  year: number;
  directors: Array<string>;
  length: string;
  favourite: boolean;
  watched: boolean;
};

export type SeriesType = {
  id: number;
  title: string;
  posterUrl: string;
  startYear: number;
  endYear: number;
  directors: Array<string>;
  length: string;
  episodes: number;
  seasons: number;
  favourite: boolean;
  watched: boolean;
};

export type CollectionBasicType = {
  id: number;
  title: string;
};

export type CollectionType = {
  id: number;
  title: string;
  movies: MovieType[];
  series: SeriesType[];
};
