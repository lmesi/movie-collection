import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collection } from './collection.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private http: HttpClient) {}

  getCollections() {
    return this.http.get<Collection[]>('/api/collections');
  }

  getLimitedCollections() {
    return this.http.get<Collection[]>('/api/collections?isLimited=true');
  }

  getCollection(id: number) {
    return this.http.get<Collection>(`/api/collections/${id}`);
  }

  postCollection(title: string) {
    return this.http.post('/api/collections', {
      title,
    });
  }

  deleteCollection(id: number) {
    return this.http.delete(`/api/collections/${id}`);
  }

  addToCollection(movieId: number, collectionId: number, type: string) {
    return this.http.put(
      `/api/collections/${collectionId}/add?type=${type}&id=${movieId}`,
      {}
    );
  }

  removeFromCollection(movieId: number, collectionId: number, type: string) {
    return this.http.put(
      `/api/collections/${collectionId}/remove?type=${type}&id=${movieId}`,
      {}
    );
  }
}
