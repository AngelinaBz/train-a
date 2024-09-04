import { createFeatureSelector, createSelector } from '@ngrx/store';

import getRideFromTo from '../../helpers/getRideFromTo';
import { DetailsState } from './details.reducers';

export const selectDetailsState = createFeatureSelector<DetailsState>('details');

export const selectRideDetails = ({ rideId, to, from }: { rideId: number; from?: number; to?: number }) =>
  createSelector(selectDetailsState, (state: DetailsState) => {
    const item = state.details[rideId]?.data;

    if (item) {
      return getRideFromTo({
        from,
        to,
        details: item,
      });
    }

    return item;
  });

export const selectRideDetailsLoading = (rideId: number) =>
  createSelector(selectDetailsState, (state: DetailsState) => state.details[rideId]?.isLoading);

export const selectRideDetailsError = (rideId: number) =>
  createSelector(selectDetailsState, (state: DetailsState) => state.details[rideId]?.error);
