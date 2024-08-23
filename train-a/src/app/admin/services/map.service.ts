import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private markersSubject = new BehaviorSubject<google.maps.LatLngLiteral[]>([]);
  markers$ = this.markersSubject.asObservable();

  addMarker(lat: number, lng: number): void {
    const currentMarkers = this.markersSubject.getValue();
    const newMarkers = [...currentMarkers, { lat, lng }];
    this.markersSubject.next(newMarkers);
  }
}
