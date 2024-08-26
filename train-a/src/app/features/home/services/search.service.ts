import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

export interface SearchCriteria {
  fromLatitude: number;
  fromLongitude: number;
  toLatitude: number;
  toLongitude: number;
  time?: number;
}

export interface SearchResult {
  departureTime: string;
  arrivalTime: string;
  duration: string;
  fromCity: string;
  toCity: string;
  firstClassPrice?: number;
  secondClassPrice?: number;
  womenOnlyPrice?: number;
  routes: Route[];
}

export interface StationInfo {
  stationId: number;
  city: string;
  geolocation: {
    latitude: number;
    longitude: number;
  };
}

export interface Route {
  id: number;
  path: number[];
  carriages: string[];
  schedule: Schedule[];
}

export interface Schedule {
  rideId: number;
  segments: Segment[];
}

export interface Segment {
  time: string[];
  price: Record<string, number>;
  occupiedSeats: number[];
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly apiUrl = 'https://api.mapbox.com/directions/v5/mapbox/driving';
  private readonly accessToken = environment.mapboxToken;

  constructor(private http: HttpClient) {}

  search(criteria: SearchCriteria): Observable<SearchResult> {
    let params = new HttpParams()
      .set('coordinates', `${criteria.fromLongitude},${criteria.fromLatitude};${criteria.toLongitude},${criteria.toLatitude}`)
      .set('access_token', this.accessToken);

    if (criteria.time) {
      params = params.set('time', criteria.time.toString());
    }

    return this.http.get<SearchResult>(this.apiUrl, { params }).pipe(
      catchError((err) => {
        console.error('Search API error:', err);
        return throwError(err);
      }),
    );
  }
}
