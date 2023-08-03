import { Component } from '@angular/core';
import { movies } from 'src/assets/movies';

@Component({
  selector: 'app-mediaList',
  templateUrl: './mediaList.component.html',
  styleUrls: ['./mediaList.component.css'],
})
export class MediaListComponent {
  movies = [...movies];
}
