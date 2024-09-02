import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Carriage, Route, SearchCriteria, SearchResult, StationInfo } from '../models/search.models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly searchApiUrl = '/api/search';
  private readonly routeApiUrl = '/api/route';
  private readonly stationsUrl = '/api/station';
  private readonly carriagesUrl = '/api/carriage';

  constructor(private http: HttpClient) {}

  search(criteria: SearchCriteria): Observable<SearchResult> {
    const params = new HttpParams()
      .set('fromLatitude', criteria.fromLatitude.toString())
      .set('fromLongitude', criteria.fromLongitude.toString())
      .set('toLatitude', criteria.toLatitude.toString())
      .set('toLongitude', criteria.toLongitude.toString())
      .set('date', criteria.date)
      .set('time', criteria.time?.toString() || '');

    return this.http.get<SearchResult>(this.searchApiUrl, { params }).pipe(
      catchError((err) => {
        console.error('Search API error:', err);
        return throwError(err);
      }),
    );
  }

  getStations(): Observable<StationInfo[]> {
    return this.http.get<StationInfo[]>(this.stationsUrl).pipe(
      catchError((err) => {
        console.error('Stations API error:', err);
        return throwError(err);
      }),
    );
  }

  getCarriages(): Observable<Carriage[]> {
    return this.http.get<Carriage[]>(this.carriagesUrl).pipe(
      catchError((err) => {
        console.error('Carriages API error:', err);
        return throwError(err);
      }),
    );
  }

  getRouteInfo(routeId: number): Observable<Route> {
    return this.http.get<Route>(`${this.routeApiUrl}/${routeId}`).pipe(
      map((route) => {
        return route;
      }),
      catchError((err) => {
        console.error('Route Info API error:', err);
        return throwError(err);
      }),
    );
  }
}
