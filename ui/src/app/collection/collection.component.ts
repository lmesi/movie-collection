import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent {
  collections = [
    { id: 1, title: 'Movies to watch' },
    { id: 2, title: 'Series to watch' },
    { id: 3, title: 'Worth to rewatch' },
    { id: 4, title: 'Do not watch' },
    { id: 5, title: 'Study' },
  ];

  inputTitle: string = '';

  addCollection() {
    this.collections.push({
      id: this.collections.length + 1,
      title: this.inputTitle,
    });
  }

  deleteCollection(id: number) {
    const indexOfCollection = this.collections.findIndex(
      (collection) => collection.id === id
    );
    this.collections.splice(indexOfCollection, 1);
  }
}
