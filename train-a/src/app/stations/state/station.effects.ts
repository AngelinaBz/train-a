import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { Station } from '../models/station.model';
import * as stationActions from './station.actions';

@Injectable()
export class StationEffects {
  private apiUrl = '/api/station';

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  loadStations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(stationActions.loadStations),
      mergeMap(() => {
        return this.http.get<Station[]>(this.apiUrl).pipe(
          map((stations) => {
            return stationActions.loadStationsSuccess({ stations });
          }),
          catchError((error: HttpErrorResponse) => of(stationActions.loadStationsFailure({ error: error.error }))),
        );
      }),
    );
  });

  createStation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(stationActions.createStation),
      mergeMap(({ station }) =>
        this.http.post<{ id: number }>(this.apiUrl, station).pipe(
          map((response) =>
            stationActions.createStationSuccess({
              station: {
                ...station,
                id: response.id,
              },
            }),
          ),
          catchError((error) => of(stationActions.createStationFailure({ error }))),
        ),
      ),
    );
  });

  deleteStation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(stationActions.deleteStation),
      mergeMap((action) =>
        this.http.delete<void>(`${this.apiUrl}/${action.id}`).pipe(
          map(() => stationActions.deleteStationSuccess({ id: action.id })),
          catchError((error) => of(stationActions.deleteStationFailure({ error }))),
        ),
      ),
    );
  });
}
