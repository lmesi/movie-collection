import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection.model';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  collections!: Collection[];

  constructor(private collectionService: CollectionService) {}

  ngOnInit(): void {
    this.collectionService.getCollections().subscribe((data) => {
      this.collections = data;
    });
  }

  inputTitle: string = '';

  addCollection() {
    this.collectionService.postCollection(this.inputTitle).subscribe((data) => {
      console.log('added');
      this.collectionService.getCollections().subscribe((data) => {
        this.collections = data;
        this.inputTitle = '';
      });
    });
  }

  deleteCollection(id: number) {
    this.collectionService.deleteCollection(id).subscribe((data) => {
      console.log('delete');
      this.collectionService.getCollections().subscribe((data) => {
        this.collections = data;
      });
    });
  }
}
