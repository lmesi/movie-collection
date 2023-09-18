import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/medias.model';
import { MediaService } from '../media.service';
import { CollectionBasic } from '../collection.model';
import { CollectionService } from '../collection.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ALREADY_ADDED, SOMETHING_WENT_WRONG } from '../constants';

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
    private router: Router,
    private dialog: MatDialog
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

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    error: any
  ): void {
    this.dialog.open(DialogComponent, {
      data: {
        type: 'movie',
        title: error.title,
        message: error.message,
      },
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  addToCollection() {
    if (this.selectedCollection !== undefined)
      this.collectionService
        .addToCollection(this.movieId, this.selectedCollection, 'movie')
        .subscribe({
          next: () => {
            this.router.navigate(['/collections', this.selectedCollection], {
              relativeTo: this.route.root,
            });
          },
          error: (error) => {
            if (error.error === 'ALREADY_ADDED') {
              this.openDialog('0ms', '0ms', ALREADY_ADDED);
            } else {
              this.openDialog('0ms', '0ms', SOMETHING_WENT_WRONG);
            }
          },
        });
  }
}
