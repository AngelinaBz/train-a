import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Marker {
  lat: number;
  lng: number;
  city: string;
}
@Injectable({
  providedIn: 'root',
})
export class MapService {
  private markersSubject = new BehaviorSubject<Marker[]>([]);
  markers$ = this.markersSubject.asObservable();

  private markerClickSubject = new BehaviorSubject<Marker | null>(null);
  markerClick$ = this.markerClickSubject.asObservable();

  addMarker(lat: number, lng: number, city: string): void {
    const currentMarkers = this.markersSubject.getValue();
    const newMarkers = [...currentMarkers, { lat, lng, city }];
    this.markersSubject.next(newMarkers);
  }

  selectMarker(marker: Marker): void {
    this.markerClickSubject.next(marker);
  }
}
