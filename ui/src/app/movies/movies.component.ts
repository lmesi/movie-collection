import { Component } from '@angular/core';
import { movies } from 'src/assets/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies = [...movies];
}
