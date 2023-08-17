import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection.model';
import { CollectionService } from '../collection.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css'],
})
export class CollectionDetailsComponent implements OnInit {
  collection!: Collection;

  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { collectionId } = this.route.snapshot.params;
    this.collectionService.getCollection(collectionId).subscribe((data) => {
      this.collection = data;
    });
  }
}
