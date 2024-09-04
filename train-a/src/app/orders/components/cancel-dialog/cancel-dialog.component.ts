import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './cancel-dialog.component.html',
  styleUrl: './cancel-dialog.component.scss',
})
export class CancelDialogComponent {
  dialogData: {
    orderId: number;
    userEmail: string;
    userName: string;
  } = inject(MAT_DIALOG_DATA);
}
