import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as carriageActions from './carriage.actions';
import { Carriage } from './carriage.model';

@Injectable()
export class CarriageEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  loadCarriages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(carriageActions.loadCarriages),
      mergeMap((action) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${action.token}`,
        });
        return this.http.get<Carriage[]>('/api/carriage', { headers }).pipe(
          map((carriages) => {
            console.log(carriages);
            return carriageActions.loadCarriagesSuccess({ carriages });
          }),
          catchError((error: HttpErrorResponse) => of(carriageActions.loadCarriagesFailure({ error: error.error }))),
        );
      }),
    );
  });
}
