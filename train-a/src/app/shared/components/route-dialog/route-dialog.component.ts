import { CommonModule, DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-route-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatListModule],
  templateUrl: './route-dialog.component.html',
  styleUrls: ['./route-dialog.component.scss'],
  providers: [DatePipe],
})
export class RouteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RouteDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      routeId: number;
      firstStation: string;
      lastStation: string;
      schedule: Array<{
        stationName: string;
        departureTime: string;
        arrivalTime: string;
        interval: string;
      }>;
    },
    private datePipe: DatePipe,
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  formatDate(date: string): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm') || 'Unknown';
  }
}
