import { Component, OnInit } from '@angular/core';
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
export class StationsComponent implements OnInit {
  latitude: number | null = null;
  longitude: number | null = null;
  city: string = '';

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.markerClick$.subscribe((marker) => {
      if (marker) {
        this.latitude = marker.lat;
        this.longitude = marker.lng;
        this.city = marker.city;
      }
    });
  }

  addMarker(): void {
    if (this.latitude !== null && this.longitude !== null) {
      this.mapService.addMarker(this.latitude, this.longitude, this.city);
    }
  }
}
