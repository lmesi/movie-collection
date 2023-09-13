import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/medias.model';
import { MediaService } from '../media.service';
import { CollectionBasic } from '../collection.model';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie | undefined;
  movieId!: number;
  selectedCollection: number | undefined;
  collectionOptions!: CollectionBasic[];

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService,
    private collectionService: CollectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['movieId'];
    this.mediaService.getMovieById(this.movieId).subscribe((data) => {
      this.movie = data;
    });
    this.collectionService.getCollections().subscribe((data) => {
      this.collectionOptions = data;
      console.log(this.collectionOptions);
    });
  }

  addToCollection() {
    if (this.selectedCollection !== undefined)
      this.collectionService
        .addToCollection(this.movieId, this.selectedCollection, 'movie')
        .subscribe(() => {
          this.router.navigate(['/collections', this.selectedCollection], {
            relativeTo: this.route.root,
          });
        });
  }
}
