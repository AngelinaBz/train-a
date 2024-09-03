import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { SearchService } from '../../../shared/services/search.service';
import * as SearchActions from './search.actions';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private searchService: SearchService,
  ) {}

  performSearch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.performSearch),
      mergeMap((action) =>
        this.searchService.search(action.criteria).pipe(
          map((searchResults) => SearchActions.performSearchSuccess({ searchResults })),
          catchError((error) => of(SearchActions.performSearchFailure({ error: error.message }))),
        ),
      ),
    );
  });

  loadStations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.loadStations),
      mergeMap(() =>
        this.searchService.getStations().pipe(
          map((stations) => SearchActions.loadStationsSuccess({ stations })),
          catchError((error) => of(SearchActions.loadStationsFailure({ error: error.message }))),
        ),
      ),
    );
  });

  loadCarriages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.loadCarriages),
      mergeMap(() =>
        this.searchService.getCarriages().pipe(
          map((carriages) => SearchActions.loadCarriagesSuccess({ carriages })),
          catchError((error) => of(SearchActions.loadCarriagesFailure({ error: error.message }))),
        ),
      ),
    );
  });

  loadRouteInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SearchActions.loadRouteInfo),
      mergeMap((action) =>
        this.searchService.getRouteInfo(action.routeId).pipe(
          map((routeInfo) => SearchActions.loadRouteInfoSuccess({ routeInfo })),
          catchError((error) => of(SearchActions.loadRouteInfoFailure({ error: error.message }))),
        ),
      ),
    );
  });
}
