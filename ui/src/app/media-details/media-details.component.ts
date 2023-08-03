import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, movies } from 'src/assets/movies';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css'],
})
export class MediaDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { movieId } = this.route.snapshot.params;
    this.movie = movies.find((movie) => movie.id === Number(movieId));
  }
}
