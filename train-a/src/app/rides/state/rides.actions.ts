import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { RouteByID } from '../models/ride.model';

export const loadRouteById = createAction('[Rides] Load Route By Id', props<{ routeId: number }>());
export const loadRouteByIdSuccess = createAction('[Rides] Load Route By Id Success', props<{ routeById: RouteByID }>());
export const loadRouteByIdFailure = createAction('[Rides] Load Route By Id Failure', props<{ error: ApiError }>());
