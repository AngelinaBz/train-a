import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { StationList } from '../models/map.model';
import * as StationActions from './station.actions';

@Injectable()
export class StationEffects {
  private apiUrl = '/api/station';

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  loadStations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StationActions.loadStations),
      mergeMap(() =>
        this.http.get<StationList[]>(this.apiUrl).pipe(
          map((stations) => StationActions.loadStationsSuccess({ stations })),
          catchError((error) => of(StationActions.loadStationsFailure({ error }))),
        ),
      ),
    );
  });

  createStation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StationActions.createStation),
      mergeMap(({ station }) =>
        this.http.post<{ id: number }>(this.apiUrl, station).pipe(
          map((response) => StationActions.createStationSuccess({ id: response.id })),
          catchError((error) => of(StationActions.createStationFailure({ error }))),
        ),
      ),
    );
  });
}
