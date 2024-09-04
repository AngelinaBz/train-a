import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-ride-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogActions, MatButton, MatDialogContent, MatDialogTitle, ReactiveFormsModule],
  templateUrl: './delete-ride-dialog.component.html',
  styleUrl: './delete-ride-dialog.component.scss',
})
export class DeleteRideDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteRideDialogComponent>) {}

  confirmDelete(): void {
    this.dialogRef.close(true);
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}
