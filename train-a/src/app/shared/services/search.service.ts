import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SearchCriteria, SearchResult } from '../models/search.models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly apiUrl = '/api/search';

  constructor(private http: HttpClient) {}

  search(criteria: SearchCriteria): Observable<SearchResult> {
    const params = new HttpParams()
      .set('fromLatitude', criteria.fromLatitude)
      .set('fromLongitude', criteria.fromLongitude)
      .set('toLatitude', criteria.toLatitude)
      .set('toLongitude', criteria.toLongitude);

    if (criteria.time) {
      params.set('time', criteria.time.toString());
    }

    return this.http.get<SearchResult>(this.apiUrl, { params }).pipe(
      catchError((err) => {
        console.error('Search API error:', err);
        return throwError(err);
      }),
    );
  }
}
