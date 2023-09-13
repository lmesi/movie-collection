import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from 'src/app/medias.model';
import { MediaService } from '../media.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  searchForm = new FormGroup({
    title: new FormControl(undefined, [Validators.minLength(2)]),
    year: new FormControl(undefined, [
      Validators.min(1900),
      Validators.max(this.maxYear),
    ]),
  });

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
  }

  handleSearch() {
    if (
      this.searchForm.valid &&
      (this.searchForm.value.title || this.searchForm.value.year)
    )
      this.mediaService
        .searchForMedias(
          this.type,
          this.searchForm.value.title ?? '',
          this.searchForm.value.year ?? 0
        )
        .subscribe((data) => {
          this.medias = data;
        });
  }

  refreshPage() {
    window.location.reload();
  }
}
