import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MediaListComponent } from './mediaList/mediaList.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { CollectionComponent } from './collection/collection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogWarningComponent } from './dialog-warning/dialog-warning.component';

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
    DialogComponent,
    DialogWarningComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
      { path: '**', redirectTo: '' },
    ]),
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
