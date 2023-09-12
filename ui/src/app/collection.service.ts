import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collection } from './collection.model';

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
}
