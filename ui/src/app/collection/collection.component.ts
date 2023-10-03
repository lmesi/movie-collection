import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection.model';
import { CollectionService } from '../collection.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogWarningComponent } from '../dialog-warning/dialog-warning.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  collections!: Collection[];
  inputTitle: string = '';
  shouldShowCollections!: boolean;

  constructor(
    private collectionService: CollectionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.collectionService.getCollections().subscribe((data) => {
      this.collections = data;
      this.shouldShowCollections = this.collections.length > 0;
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    collectionName: string,
    collectionId: number
  ): void {
    const dialogRef = this.dialog.open(DialogWarningComponent, {
      data: {
        collectionName,
        title: 'Delete collection',
        message: `Are you sure you want to delete the "${collectionName}" collection`,
      },
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteCollection(collectionId);
      }
    });
  }

  addCollection() {
    this.collectionService.postCollection(this.inputTitle).subscribe(() => {
      this.collectionService.getCollections().subscribe((data) => {
        this.collections = data;
        this.inputTitle = '';
      });
    });
  }

  deleteCollection(id: number) {
    this.collectionService.deleteCollection(id).subscribe(() => {
      this.collectionService.getCollections().subscribe((data) => {
        this.collections = data;
      });
    });
  }
}
