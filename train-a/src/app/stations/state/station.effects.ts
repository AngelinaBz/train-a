import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as stationActions from './station.actions';
import { Station } from './station.model';

@Injectable()
export class StationEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  loadStations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(stationActions.loadStations),
      mergeMap((action) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${action.token}`,
        });
        return this.http.get<Station[]>('/api/station', { headers }).pipe(
          map((stations) => {
            return stationActions.loadStationsSuccess({ stations });
          }),
          catchError((error: HttpErrorResponse) => of(stationActions.loadStationsFailure({ error: error.error }))),
        );
      }),
    );
  });
}
