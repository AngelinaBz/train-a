import { createFeatureSelector, createSelector } from '@ngrx/store';

import { OrderState } from './order.reducers';

export const selectOrderState = createFeatureSelector<OrderState>('order');

export const selectIsLoading = createSelector(selectOrderState, (state: OrderState) => state.isLoading);

export const selectError = createSelector(selectOrderState, (state: OrderState) => state.error);

export const selectOrders = createSelector(selectOrderState, (state: OrderState) => state.orders);

export const selectIsCancelSuccess = createSelector(selectOrderState, (state: OrderState) => state.isCancelSuccess);

export const selectMakeOrderState = createSelector(selectOrderState, (state: OrderState) => state.makeOrder);
