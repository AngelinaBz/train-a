import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { Order } from './order.model';

export const loadOrders = createAction('[Orders] Load Orders', props<{ token: string; all?: boolean }>());

export const loadOrdersSuccess = createAction('[Orders] Load Orders Success', props<{ orders: Order[] }>());

export const loadOrdersFailure = createAction('[Orders] Load Orders Failure', props<{ error: ApiError }>());

export const cancelOrder = createAction('[Orders] Cancel Order', props<{ token: string; orderId: number }>());

export const cancelOrderSuccess = createAction('[Orders] Cancel Order Success');

export const cancelOrderFailure = createAction('[Orders] Cancel Order Failure', props<{ error: ApiError }>());
