import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DetailsState } from './details.reducers';

export const selectDetailsState = createFeatureSelector<DetailsState>('details');

export const selectRideDetails = (rideId: number) =>
  createSelector(selectDetailsState, (state: DetailsState) => state.details[rideId]?.data);

export const selectRideDetailsLoading = (rideId: number) =>
  createSelector(selectDetailsState, (state: DetailsState) => state.details[rideId]?.isLoading);

export const selectRideDetailsError = (rideId: number) =>
  createSelector(selectDetailsState, (state: DetailsState) => state.details[rideId]?.error);
