import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Series } from 'src/app/medias.model';
import { MediaService } from '../media.service';
import { CollectionService } from '../collection.service';
import { CollectionBasic } from '../collection.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ALREADY_ADDED, SOMETHING_WENT_WRONG } from '../constants';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css'],
})
export class SeriesDetailsComponent implements OnInit {
  series!: Series | undefined;
  seriesId!: number;
  collectionOptions!: CollectionBasic[];
  selectedCollection: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mediaSerivce: MediaService,
    private collectionService: CollectionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.seriesId = this.route.snapshot.params['seriesId'];
    this.mediaSerivce.getSeriesById(this.seriesId).subscribe((data) => {
      this.series = data;
    });
    this.collectionService.getCollections().subscribe((data) => {
      this.collectionOptions = data;
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    error: any
  ): void {
    this.dialog.open(DialogComponent, {
      data: {
        type: 'TV show',
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
        .addToCollection(this.seriesId, this.selectedCollection, 'series')
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
