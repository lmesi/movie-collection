import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection.model';
import { CollectionService } from '../collection.service';
import { ActivatedRoute } from '@angular/router';
import { DialogWarningComponent } from '../dialog-warning/dialog-warning.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css'],
})
export class CollectionDetailsComponent implements OnInit {
  collection!: Collection;
  collectionId!: number;
  shouldShowMovies!: boolean;
  shouldShowSeries!: boolean;

  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const { collectionId } = this.route.snapshot.params;
    this.collectionId = collectionId;
    this.collectionService
      .getCollection(this.collectionId)
      .subscribe((data) => {
        this.collection = data;
        this.shouldShowMovies = this.collection.movies.length > 0;
        this.shouldShowSeries = this.collection.series.length > 0;
      });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    type: string,
    movieId: number,
    movieTitle: string
  ): void {
    const dialogRef = this.dialog.open(DialogWarningComponent, {
      data: {
        title: `Delete ${type}`,
        message: `Are you sure you want to delete "${movieTitle}"`,
      },
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.handleDelete(movieId, type);
      }
    });
  }

  handleDelete(movieId: number, type: string) {
    this.collectionService
      .removeFromCollection(movieId, this.collectionId, type)
      .subscribe(() => {
        this.collectionService
          .getCollection(this.collectionId)
          .subscribe((data) => {
            this.collection = data;
            this.shouldShowMovies = this.collection.movies.length > 0;
            this.shouldShowSeries = this.collection.series.length > 0;
          });
      });
  }
}
