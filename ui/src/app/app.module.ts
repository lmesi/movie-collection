import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MediaListComponent } from './mediaList/mediaList.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { CollectionComponent } from './collection/collection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    MediaListComponent,
    MovieDetailsComponent,
    SeriesDetailsComponent,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'movies', component: MediaListComponent },
      { path: 'movies/:movieId', component: MovieDetailsComponent },
      { path: 'series', component: MediaListComponent },
      { path: 'series/:seriesId', component: SeriesDetailsComponent },
      { path: 'collection', component: CollectionComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
