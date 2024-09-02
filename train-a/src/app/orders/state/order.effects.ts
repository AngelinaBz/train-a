import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
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
        return this.http.get<Order[]>('/api/order', { params }).pipe(
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
        return this.http.delete(`/api/order/${action.orderId}`).pipe(
          map(() => {
            return orderActions.cancelOrderSuccess();
          }),
          catchError((error: HttpErrorResponse) => of(orderActions.cancelOrderFailure({ error: error.error }))),
        );
      }),
    );
  });

  makeOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.makeOrder),
      mergeMap((action) => {
        return this.http.post(`/api/order`, action.order).pipe(
          map(() => {
            return orderActions.makeOrderSuccess({
              id: 1,
            });
          }),
          catchError((error: HttpErrorResponse) => of(orderActions.makeOrderFailure({ error: error.error }))),
        );
      }),
    );
  });
}
