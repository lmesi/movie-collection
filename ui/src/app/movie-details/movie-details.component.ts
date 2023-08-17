import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/medias.model';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    const { movieId } = this.route.snapshot.params;
    this.mediaService.getMovieById(movieId).subscribe((data) => {
      this.movie = data;
    });
  }
}
