import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import User from '../models/User.model';
import * as userActions from './user.actions';

export const getUserProfile = createEffect(
  (actions$ = inject(Actions), http = inject(HttpClient)) => {
    return actions$.pipe(
      ofType(userActions.getUserProfile),
      mergeMap(() =>
        http.get<User>('/api/profile').pipe(
          map((response) => userActions.getUserProfileSuccess({ user: response })),
          catchError((error: HttpErrorResponse) => of(userActions.getUserProfileFailure({ error: error.error }))),
        ),
      ),
    );
  },
  { functional: true },
);

export const updateUserProfile = createEffect(
  (actions$ = inject(Actions), http = inject(HttpClient)) => {
    return actions$.pipe(
      ofType(userActions.updateUserProfile),
      mergeMap((action) =>
        http
          .put<User>('/api/profile', {
            ...action,
          })
          .pipe(
            map((response) => userActions.updateUserProfileSuccess({ user: response })),
            catchError((error: HttpErrorResponse) => of(userActions.updateUserProfileFailure({ error: error.error }))),
          ),
      ),
    );
  },
  { functional: true },
);
