import { Movie, Series } from './medias.model';

export interface CollectionBasic {
  id: number;
  title: string;
}

export interface Collection {
  id: number;
  title: string;
  movies: Movie[];
  series: Series[];
}
