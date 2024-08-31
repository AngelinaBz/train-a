import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { StationResponse } from '../models/map.model';
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
        this.http.get<StationResponse[]>(this.apiUrl).pipe(
          map((stations) => StationActions.loadStationsSuccess({ stations })),
          catchError((error) => of(StationActions.loadStationsFailure({ error }))),
        ),
      ),
    );
  });

  createStation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StationActions.createStation),
      mergeMap(({ station, connectedTo }) =>
        this.http.post<{ id: number }>(this.apiUrl, station).pipe(
          map((response) =>
            StationActions.createStationSuccess({
              station: {
                ...station,
                id: response.id,
                connectedTo,
              },
            }),
          ),
          catchError((error) => of(StationActions.createStationFailure({ error }))),
        ),
      ),
    );
  });

  deleteStation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StationActions.deleteStation),
      mergeMap((action) =>
        this.http.delete<void>(`${this.apiUrl}/${action.id}`).pipe(
          map(() => StationActions.deleteStationSuccess({ id: action.id })),
          catchError((error) => of(StationActions.deleteStationFailure({ error }))),
        ),
      ),
    );
  });
}
