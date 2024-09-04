import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ApiError } from '../../../shared/models/ApiError.model';
import convertRouteToRideDetails from '../../helpers/convertRouteToRideDetails';
import { SearchResultsRaw } from '../../models/Search.model';
import * as SearchActions from './search.actions';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  performSearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.performSearch),
      mergeMap((action) =>
        this.http
          .get<SearchResultsRaw>('/api/search', {
            params: {
              ...action.criteria,
            },
          })
          .pipe(
            map((searchResults) => {
              const rideDetails = {
                ...searchResults,
                routes: searchResults.routes.map((route) => convertRouteToRideDetails(route)),
              };

              return SearchActions.performSearchSuccess({ searchResults: rideDetails });
            }),
            catchError((error: ApiError) => of(SearchActions.performSearchFailure({ error }))),
          ),
      ),
    );
  });
}
