import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { SearchCriteria, SearchResult } from '../models/search.models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly apiUrl = 'https://api.rasp.yandex.net/v3.0/search';

  constructor(private http: HttpClient) {}

  search(criteria: SearchCriteria): Observable<SearchResult> {
    let params = new HttpParams()
      .set('from', criteria.fromCode || '')
      .set('to', criteria.toCode || '')
      .set('date', criteria.date)
      .set('format', 'json')
      .set('lang', 'ru_RU')
      .set('apikey', environment.yaToken);

    if (criteria.time) {
      params = params.set('time', criteria.time.toString());
    }
    console.log('Request URL:', this.apiUrl, params.toString());

    return this.http.get<SearchResult>(this.apiUrl, { params }).pipe(
      catchError((err) => {
        console.error('Search API error:', err);
        return throwError(err);
      }),
    );
  }
}
