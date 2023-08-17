export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  year: number;
  directors: Array<string>;
  length: string;
  favourite: boolean;
  watched: boolean;
}

export interface Series {
  id: number;
  title: string;
  posterUrl: string;
  year: string;
  directors: Array<string>;
  length: string;
  episodes: number;
  seasons: number;
  favourite: boolean;
  watched: boolean;
}

export interface Media {
  id: number;
  title: string;
  posterUrl: string;
}
