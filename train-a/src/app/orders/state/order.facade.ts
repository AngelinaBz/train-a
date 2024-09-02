import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';

import MakeOrderRequest from '../models/makeOrderRequest.model';
import * as OrderActions from './order.actions';
import { OrderState } from './order.reducers';
import * as OrderSelectors from './order.selectors';

@Injectable({
  providedIn: 'root',
})
export class OrderFacade {
  orders$ = this.store.select(OrderSelectors.selectOrders);
  orderError$ = this.store.select(OrderSelectors.selectError);
  isLoading$ = this.store.select(OrderSelectors.selectIsLoading);
  isCancelSuccess$ = this.store.select(OrderSelectors.selectIsCancelSuccess);
  makeOrderState$ = this.store.select(OrderSelectors.selectMakeOrderState);

  constructor(private store: Store) {}

  loadOrders(all?: boolean): void {
    this.store.dispatch(OrderActions.loadOrders({ all }));
  }

  cancelOrder(orderId: number): void {
    this.store.dispatch(OrderActions.cancelOrder({ orderId }));
  }

  makeOrder({
    order,
    onFailure,
    onSuccess,
  }: {
    order: MakeOrderRequest;
    onSuccess?: (state: OrderState['makeOrder']) => void;
    onFailure?: (state: OrderState['makeOrder']) => void;
  }): void {
    this.store.dispatch(OrderActions.makeOrder({ order }));
    this.makeOrderState$
      .pipe(
        filter((state) => !state.isLoading),
        take(1),
      )
      .subscribe((state) => {
        if (!state.error) {
          onSuccess?.(state);
        } else {
          onFailure?.(state);
        }
      });
  }
}
