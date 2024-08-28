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
  isCancelSuccess$ = this.store.select(OrderSelectors.selectIsCancelSuccess);

  constructor(private store: Store) {}

  loadOrders(token: string, all?: boolean): void {
    this.store.dispatch(OrderActions.loadOrders({ token, all }));
  }

  cancelOrder(token: string, orderId: number): void {
    this.store.dispatch(OrderActions.cancelOrder({ token, orderId }));
  }
}
