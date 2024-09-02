import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { RouteByID } from '../models/ride.model';
import * as rideActions from './rides.actions';

@Injectable()
export class RideEffects {
  private apiUrl = '/api/route';

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  loadRouteById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(rideActions.loadRouteById),
      mergeMap((action) => {
        return this.http.get<RouteByID>(`${this.apiUrl}/${action.routeId}`).pipe(
          map((routeById) => rideActions.loadRouteByIdSuccess({ routeById })),
          catchError((error: HttpErrorResponse) => of(rideActions.loadRouteByIdFailure({ error: error.error }))),
        );
      }),
    );
  });
}
