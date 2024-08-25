import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { MapService } from '../../../services/map/map.service';

interface Marker {
  lat: number;
  lng: number;
  city: string;
}
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 51.505, lng: -0.09 };
  zoom = 12;
  markers: Marker[] = [];

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.markers$.subscribe((markers) => {
      this.markers = markers;
    });
  }

  mapClick(event: google.maps.MapMouseEvent): void {
    const latLng = event.latLng?.toJSON();
    if (latLng) {
      const newMarker = { lat: latLng.lat, lng: latLng.lng, city: 'marked сity' };
      this.mapService.addMarker(newMarker.lat, newMarker.lng, newMarker.city);
      this.mapService.setMarkerLocation(newMarker);
    }
  }
}
