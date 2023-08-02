import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, movies } from 'src/assets/movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { movieId } = this.route.snapshot.params;
    this.movie = movies.find((movie) => movie.id === Number(movieId));
  }
}
