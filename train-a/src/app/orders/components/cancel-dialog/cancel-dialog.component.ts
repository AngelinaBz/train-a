import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './cancel-dialog.component.html',
  styleUrl: './cancel-dialog.component.scss',
})
export class CancelDialogComponent {}
