import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MapService } from '../../services/map.service';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [FormsModule, MatInputModule, MapComponent],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.scss',
})
export class StationsComponent {
  latitude: number | null = null;
  longitude: number | null = null;

  constructor(private mapService: MapService) {}

  addMarker(): void {
    if (this.latitude !== null && this.longitude !== null) {
      this.mapService.addMarker(this.latitude, this.longitude);
    }
  }
}
