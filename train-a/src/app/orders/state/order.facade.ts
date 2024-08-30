import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as OrderActions from './order.actions';
import * as OrderSelectors from './order.selectors';

@Injectable({
  providedIn: 'root',
})
export class OrderFacade {
  orders$ = this.store.select(OrderSelectors.selectOrders);
  orderError$ = this.store.select(OrderSelectors.selectError);
  isLoading$ = this.store.select(OrderSelectors.selectIsLoading);
  isCancelSuccess$ = this.store.select(OrderSelectors.selectIsCancelSuccess);

  constructor(private store: Store) {}

  loadOrders(all?: boolean): void {
    this.store.dispatch(OrderActions.loadOrders({ all }));
  }

  cancelOrder(orderId: number): void {
    this.store.dispatch(OrderActions.cancelOrder({ orderId }));
  }
}
