import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Marker } from '../../models/map.model';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private markersSubject = new BehaviorSubject<Marker[]>([]);
  markers$ = this.markersSubject.asObservable();

  private markerClickSubject = new BehaviorSubject<Marker | null>(null);
  markerClick$ = this.markerClickSubject.asObservable();

  constructor() {
    this.markersSubject.next([{ lat: 51.505, lng: -0.09, city: '' }]);
  }

  updateMarkerLocation(lat: number, lng: number): void {
    const currentMarkers = this.markersSubject.getValue();

    if (currentMarkers.length > 0) {
      const updatedMarker = { ...currentMarkers[0], lat, lng };
      this.markersSubject.next([updatedMarker]);
      this.markerClickSubject.next(updatedMarker);
    }
  }

  addMarker(lat: number, lng: number, city: string): void {
    const currentMarkers = this.markersSubject.getValue();
    const newMarkers = [...currentMarkers, { lat, lng, city }];
    this.markersSubject.next(newMarkers);
  }
}
