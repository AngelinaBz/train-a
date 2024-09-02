import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import * as OrderActions from './order.actions';
import { Order } from './order.model';

export interface OrderState {
  isLoading: boolean;
  isCancelSuccess: boolean;
  orders: Order[];
  error: ApiError | null;
  makeOrder: {
    isLoading: boolean;
    error: null | ApiError;
  };
}

export const initialState: OrderState = {
  isLoading: false,
  isCancelSuccess: false,
  orders: [],
  error: null,
  makeOrder: {
    isLoading: false,
    error: null,
  },
};

export const orderReducer = createReducer(
  initialState,
  on(OrderActions.loadOrders, (state): OrderState => ({ ...state, isLoading: true, error: null })),
  on(OrderActions.loadOrdersSuccess, (state, { orders }): OrderState => ({ ...state, orders, isLoading: false, error: null })),
  on(OrderActions.loadOrdersFailure, (state, { error }): OrderState => ({ ...state, isLoading: false, error })),
  on(OrderActions.cancelOrder, (state): OrderState => ({ ...state, isLoading: true, error: null })),
  on(
    OrderActions.cancelOrderSuccess,
    (state): OrderState => ({ ...state, isLoading: false, error: null, isCancelSuccess: true }),
  ),
  on(OrderActions.cancelOrderFailure, (state, { error }): OrderState => ({ ...state, isLoading: false, error })),
  on(
    OrderActions.makeOrder,
    (state): OrderState => ({
      ...state,
      makeOrder: {
        ...state.makeOrder,
        isLoading: true,
      },
    }),
  ),
  on(
    OrderActions.makeOrderSuccess,
    (state): OrderState => ({
      ...state,
      makeOrder: {
        isLoading: false,
        error: null,
      },
    }),
  ),
  on(OrderActions.makeOrderFailure, (state, { error }): OrderState => ({ ...state, makeOrder: { isLoading: false, error } })),
);
