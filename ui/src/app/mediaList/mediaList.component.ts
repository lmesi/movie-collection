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

  constructor(private router: Router, private mediaService: MediaService) {}

  ngOnInit(): void {
    const url = this.router.url;

    if (url === '/movies') {
      this.mediaService.getMovies().subscribe((data) => {
        this.medias = data;
      });
    } else if (url === '/series') {
      this.mediaService.getSeries().subscribe((data) => {
        this.medias = data;
      });
    }
    this.type = url;
    //fall back else
  }
}
