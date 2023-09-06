import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, Series } from 'src/app/medias.model';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>('/api/movies');
  }

  getLimitedMovies() {
    return this.http.get<Movie[]>('/api/movies?isLimited=true');
  }

  getMovieById(id: number) {
    return this.http.get<Movie>(`/api/movies/${id}`);
  }

  getSeries() {
    return this.http.get<Series[]>('/api/series');
  }

  getLimitedSeries() {
    return this.http.get<Series[]>('/api/series?isLimited=true');
  }

  getSeriesById(id: number) {
    return this.http.get<Series>(`/api/series/${id}`);
  }

  searchForMedias(type: String, title: String, year: number) {
    return this.http.get<Series[] | Movie[]>(
      `/api/${type}/search?title=${title}&year=${year}`
    );
  }
}
