import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Series } from 'src/app/medias.model';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css'],
})
export class SeriesDetailsComponent implements OnInit {
  series!: Series | undefined;

  constructor(
    private route: ActivatedRoute,
    private mediaSerivce: MediaService
  ) {}

  ngOnInit(): void {
    const { seriesId } = this.route.snapshot.params;
    this.mediaSerivce.getSeriesById(seriesId).subscribe((data) => {
      this.series = data;
    });
  }
}
