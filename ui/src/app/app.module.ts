import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MediaListComponent } from './mediaList/mediaList.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { CollectionComponent } from './collection/collection.component';
import { FormsModule } from '@angular/forms';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    MediaListComponent,
    MovieDetailsComponent,
    SeriesDetailsComponent,
    CollectionComponent,
    CollectionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'movies', component: MediaListComponent },
      { path: 'movies/:movieId', component: MovieDetailsComponent },
      { path: 'series', component: MediaListComponent },
      { path: 'series/:seriesId', component: SeriesDetailsComponent },
      { path: 'collections', component: CollectionComponent },
      {
        path: 'collections/:collectionId',
        component: CollectionDetailsComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
