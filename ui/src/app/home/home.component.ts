import { Component, OnInit } from '@angular/core';
import { movies } from 'src/assets/movies';
import { series } from 'src/assets/series';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  movies = [...movies];
  series = [...series];

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
