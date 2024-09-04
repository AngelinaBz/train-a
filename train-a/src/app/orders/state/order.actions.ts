import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import MakeOrderRequest from '../models/makeOrderRequest.model';
import { Order } from '../models/order.model';

export const loadOrders = createAction('[Orders] Load Orders', props<{ all?: boolean }>());

export const loadOrdersSuccess = createAction('[Orders] Load Orders Success', props<{ orders: Order[] }>());

export const loadOrdersFailure = createAction('[Orders] Load Orders Failure', props<{ error: ApiError }>());

export const cancelOrder = createAction('[Orders] Cancel Order', props<{ orderId: number }>());

export const cancelOrderSuccess = createAction('[Orders] Cancel Order Success');

export const cancelOrderFailure = createAction('[Orders] Cancel Order Failure', props<{ error: ApiError }>());

export const makeOrder = createAction('[Order] Make Order', props<{ order: MakeOrderRequest }>());
export const makeOrderSuccess = createAction('[Order] Make Order Success', props<{ id: number }>());
export const makeOrderFailure = createAction('[Order] Make Order Failure', props<{ error: ApiError }>());
