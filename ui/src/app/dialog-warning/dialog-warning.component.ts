import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  message: string;
  collectionName?: string;
}

@Component({
  selector: 'app-dialog-warning',
  templateUrl: './dialog-warning.component.html',
  styleUrls: ['./dialog-warning.component.css'],
})
export class DialogWarningComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogWarningComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
