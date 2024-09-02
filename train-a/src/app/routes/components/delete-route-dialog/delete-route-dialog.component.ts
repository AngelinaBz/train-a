import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-route-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './delete-route-dialog.component.html',
  styleUrl: './delete-route-dialog.component.scss',
})
export class DeleteRouteDialogComponent {}
