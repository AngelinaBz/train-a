import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signin),
      mergeMap((action) =>
        this.http
          .post<{ token: string }>('/api/signin', {
            email: action.email,
            password: action.password,
          })
          .pipe(
            tap((response) => {
              localStorage.setItem('auth_token', response.token);
            }),
            map((response) => authActions.signinSuccess({ token: response.token })),
            catchError((error: HttpErrorResponse) => of(authActions.signinFailure({ error: error.error }))),
          ),
      ),
    );
  });

  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signup),
      mergeMap((action) =>
        this.http
          .post('/api/signup', {
            email: action.email,
            password: action.password,
          })
          .pipe(
            map(() => authActions.signupSuccess()),
            catchError((error: HttpErrorResponse) => of(authActions.signupFailure({ error: error.error }))),
          ),
      ),
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.logout),
      mergeMap(() =>
        this.http.delete('/api/logout').pipe(
          tap(() => {
            localStorage.removeItem('auth_token');
          }),
          map(() => authActions.logoutSuccess()),
          catchError(() => of(authActions.logoutSuccess())),
        ),
      ),
    );
  });
}
