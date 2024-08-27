import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SearchCriteria, SearchResult, StationInfo } from '../models/search.models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly apiUrl = '/api/search';
  private readonly stationsUrl = '/api/station';

  constructor(private http: HttpClient) {}

  search(criteria: SearchCriteria): Observable<SearchResult> {
    const params = new HttpParams()
      .set('fromLatitude', criteria.fromLatitude.toString())
      .set('fromLongitude', criteria.fromLongitude.toString())
      .set('toLatitude', criteria.toLatitude.toString())
      .set('toLongitude', criteria.toLongitude.toString())
      .set('date', criteria.date)
      .set('time', criteria.time?.toString() || '');

    return this.http.get<SearchResult>(this.apiUrl, { params }).pipe(
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
}
