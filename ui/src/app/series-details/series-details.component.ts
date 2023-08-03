import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media } from 'src/assets/movies';
import { series } from 'src/assets/series';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css'],
})
export class SeriesDetailsComponent implements OnInit {
  series!: Media | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { seriesId } = this.route.snapshot.params;
    this.series = series.find((series) => series.id === Number(seriesId));
  }
}
