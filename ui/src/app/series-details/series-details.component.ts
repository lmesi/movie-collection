import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Series } from 'src/app/medias.model';
import { MediaService } from '../media.service';
import { CollectionService } from '../collection.service';
import { CollectionBasic } from '../collection.model';

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
    private collectionService: CollectionService
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

  addToCollection() {
    if (this.selectedCollection !== undefined)
      this.collectionService
        .addToCollection(this.seriesId, this.selectedCollection, 'series')
        .subscribe(() => {
          this.router.navigate(['/collections', this.selectedCollection], {
            relativeTo: this.route.root,
          });
        });
  }
}
