import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from 'src/app/medias.model';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-mediaList',
  templateUrl: './mediaList.component.html',
  styleUrls: ['./mediaList.component.css'],
})
export class MediaListComponent implements OnInit {
  medias!: Media[];
  type!: string;
  searchTitle: string = '';
  searchYear: number | undefined;
  maxYear = new Date().getFullYear() + 5;
  isYearValid: boolean = true;

  constructor(private router: Router, private mediaService: MediaService) {}

  ngOnInit(): void {
    const url = this.router.url;

    if (url === '/movies') {
      this.mediaService.getMovies().subscribe((data) => {
        this.medias = data;
        this.type = 'movies';
      });
    } else if (url === '/series') {
      this.mediaService.getSeries().subscribe((data) => {
        this.medias = data;
        this.type = 'series';
      });
    }
    //fall back else
  }

  handleSearch() {
    if (this.searchYear !== undefined)
      this.isYearValid = this.searchYear > 1900;

    if (this.isYearValid)
      this.mediaService
        .searchForMedias(this.type, this.searchTitle, this.searchYear ?? 0)
        .subscribe((data) => {
          this.medias = data;
        });
  }
}
