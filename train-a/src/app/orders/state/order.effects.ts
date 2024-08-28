import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as orderActions from './order.actions';
import { Order } from './order.model';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}

  loadOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.loadOrders),
      mergeMap((action) => {
        let params = new HttpParams();
        if (action.all) {
          params = params.set('all', 'true');
        }
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${action.token}`,
        });
        return this.http.get<Order[]>('/api/order', { headers, params }).pipe(
          map((orders) => {
            return orderActions.loadOrdersSuccess({ orders });
          }),
          catchError((error: HttpErrorResponse) => of(orderActions.loadOrdersFailure({ error: error.error }))),
        );
      }),
    );
  });

  cancelOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.cancelOrder),
      mergeMap((action) => {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${action.token}`,
        });
        return this.http.delete(`/api/order/${action.orderId}`, { headers }).pipe(
          map(() => {
            return orderActions.cancelOrderSuccess();
          }),
          catchError((error: HttpErrorResponse) => of(orderActions.cancelOrderFailure({ error: error.error }))),
        );
      }),
    );
  });
}
