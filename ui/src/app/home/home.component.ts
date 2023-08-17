import { Component, OnInit } from '@angular/core';
import { Movie, Series } from '../medias.model';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies!: Movie[];
  series!: Series[];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.mediaService.getMovies().subscribe((data) => {
      this.movies = data;
    });

    this.mediaService.getSeries().subscribe((data) => {
      this.series = data;
    });
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
