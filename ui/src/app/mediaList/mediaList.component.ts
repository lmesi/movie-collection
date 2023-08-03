import { Component, NgIterable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media, movies } from 'src/assets/movies';
import { series } from 'src/assets/series';

@Component({
  selector: 'app-mediaList',
  templateUrl: './mediaList.component.html',
  styleUrls: ['./mediaList.component.css'],
})
export class MediaListComponent implements OnInit {
  medias!: Array<Media> | undefined | null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const url = this.router.url;

    if (url === '/movies') {
      this.medias = [...movies];
    } else if (url === '/series') {
      this.medias = [...series];
    }
    //fall back else
  }
}
