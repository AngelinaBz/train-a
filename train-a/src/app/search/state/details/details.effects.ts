import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import RideDetails from '../../models/RideDetails.model';
import * as DetailsActions from './details.actions';

export const loadDetails = createEffect(
  (actions$ = inject(Actions), http = inject(HttpClient)) => {
    return actions$.pipe(
      ofType(DetailsActions.loadDetails),
      mergeMap(({ id }) =>
        http.get<RideDetails>(`/api/search/${id}`).pipe(
          map((response) => DetailsActions.loadDetailsSuccess({ data: response, id })),
          catchError((error: HttpErrorResponse) => of(DetailsActions.loadDetailsFailure({ error: error.error, id }))),
        ),
      ),
    );
  },
  { functional: true },
);
