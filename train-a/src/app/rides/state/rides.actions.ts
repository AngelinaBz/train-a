import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { RouteByID, Segment } from '../models/ride.model';

export const loadRouteById = createAction('[RouteId] Load Route By Id', props<{ routeId: number }>());
export const loadRouteByIdSuccess = createAction('[RouteId] Load Route By Id Success', props<{ routeById: RouteByID }>());
export const loadRouteByIdFailure = createAction('[RouteId] Load Route By Id Failure', props<{ error: ApiError }>());

export const createRide = createAction('[Rides] Create Ride', props<{ routeId: number; segments: Segment[] }>());
export const createRideSuccess = createAction('[Rides] Create Ride Success', props<{ rideId: number }>());
export const createRideFailure = createAction('[Rides] Create Ride Failure', props<{ error: ApiError }>());

export const updateRide = createAction('[Ride] Update Ride', props<{ routeId: number; rideId: number; segments: Segment[] }>());
export const updateRideSuccess = createAction('[Ride] Update Ride Success', props<{ rideId: number; segments: Segment[] }>());
export const updateRideFailure = createAction('[Ride] Update Ride Failure', props<{ error: ApiError }>());
