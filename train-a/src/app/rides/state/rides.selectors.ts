import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RideState } from './rides.reducers';

export const selectRideState = createFeatureSelector<RideState>('rides');

export const selectRouteById = createSelector(selectRideState, (state: RideState) => state.routeById);

export const selectIsLoading = createSelector(selectRideState, (state: RideState) => state.isLoading);

export const selectError = createSelector(selectRideState, (state: RideState) => state.error);

export const selectRideSuccessMessage = createSelector(selectRideState, (state: RideState) => state.successMessage);

export const selectRides = createSelector(selectRideState, (state: RideState) => state.rides);

export const selectRideError = createSelector(selectRideState, (state: RideState) => state.error);
