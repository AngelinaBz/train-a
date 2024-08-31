import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as carriageActions from './carriage.actions';
import { Carriage } from './carriage.model';

@Injectable()
export class CarriageEffects {
  private apiUrl = '/api/carriage';

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  loadCarriages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(carriageActions.loadCarriages),
      mergeMap(() => {
        return this.http.get<Carriage[]>(this.apiUrl).pipe(
          map((carriages) => carriageActions.loadCarriagesSuccess({ carriages })),
          catchError((error: HttpErrorResponse) => of(carriageActions.loadCarriagesFailure({ error: error.error }))),
        );
      }),
    );
  });

  createCarriage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(carriageActions.createCarriage),
      mergeMap(({ carriage }) =>
        this.http.post<{ code: string }>(this.apiUrl, carriage).pipe(
          map((response) => {
            const createdCarriage = {
              ...carriage,
              code: response.code,
            };
            return carriageActions.createCarriageSuccess({ carriage: createdCarriage });
          }),
          catchError((error) => of(carriageActions.createCarriageFailure({ error }))),
        ),
      ),
    );
  });

  updateCarriage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(carriageActions.updateCarriage),
      mergeMap(({ carriage }) =>
        this.http.put<{ code: string }>(`${this.apiUrl}/${carriage.code}`, carriage).pipe(
          map((response) => {
            const updatedCarriage = {
              ...carriage,
              code: response.code,
            };
            return carriageActions.updateCarriageSuccess({ carriage: updatedCarriage });
          }),
          catchError((error) => of(carriageActions.updateCarriageFailure({ error }))),
        ),
      ),
    );
  });
}
