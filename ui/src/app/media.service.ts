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

  getMovieById(id: number) {
    return this.http.get<Movie>(`/api/movies/${id}`);
  }

  getSeries() {
    return this.http.get<Series[]>('/api/series');
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
