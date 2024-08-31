import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-route',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './delete-route.component.html',
  styleUrl: './delete-route.component.scss',
})
export class DeleteRouteComponent {}
