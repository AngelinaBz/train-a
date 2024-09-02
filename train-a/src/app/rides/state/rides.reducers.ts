import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { RouteByID } from '../models/ride.model';
import * as rideActions from './rides.actions';

export interface RideState {
  isLoading: boolean;
  routeById: RouteByID | null;
  error: ApiError | null;
  successMessage: string | null;
}

export const initialState: RideState = {
  isLoading: false,
  routeById: null,
  error: null,
  successMessage: null,
};

export const rideReducer = createReducer(
  initialState,
  on(
    rideActions.loadRouteById,
    (state): RideState => ({
      ...state,
      isLoading: true,
      error: null,
      successMessage: null,
    }),
  ),
  on(
    rideActions.loadRouteByIdSuccess,
    (state, { routeById }): RideState => ({
      ...state,
      isLoading: false,
      routeById,
      successMessage: 'Route loaded successfully',
    }),
  ),
  on(
    rideActions.loadRouteByIdFailure,
    (state, { error }): RideState => ({
      ...state,
      isLoading: false,
      routeById: null,
      error,
    }),
  ),
);
