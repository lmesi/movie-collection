import { Component, OnInit } from '@angular/core';
import { Movie, Series } from '../medias.model';
import { MediaService } from '../media.service';
import { CollectionBasic } from '../collection.model';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies!: Movie[];
  series!: Series[];
  collections!: CollectionBasic[];

  constructor(
    private mediaService: MediaService,
    private collectionService: CollectionService
  ) {}

  ngOnInit(): void {
    this.mediaService.getLimitedMovies().subscribe((data) => {
      this.movies = data;
    });

    this.mediaService.getLimitedSeries().subscribe((data) => {
      this.series = data;
    });

    this.collectionService.getLimitedCollections().subscribe((data) => {
      this.collections = data;
    });
  }
}
