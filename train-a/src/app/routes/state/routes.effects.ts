import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { Route } from '../models/route.model';
import * as routesActions from './routes.actions';

@Injectable()
export class Routesffects {
  private apiUrl = '/api/route';

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  loadRoutes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routesActions.loadRoutes),
      mergeMap(() => {
        return this.http.get<Route[]>(this.apiUrl).pipe(
          map((routes) => {
            return routesActions.loadRoutesSuccess({ routes });
          }),
          catchError((error: HttpErrorResponse) => of(routesActions.loadRoutesFailure({ error: error.error }))),
        );
      }),
    );
  });

  deleteRoute$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routesActions.deleteRoute),
      mergeMap((action) => {
        return this.http.delete(`${this.apiUrl}/${action.routeId}`).pipe(
          map(() => {
            return routesActions.deleteRouteSuccess();
          }),
          catchError((error: HttpErrorResponse) => of(routesActions.deleteRouteFailure({ error: error.error }))),
        );
      }),
    );
  });
}
