import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DetailsState } from './details.reducers';

export const selectDetailsState = createFeatureSelector<DetailsState>('details');

export const selectRideDetails = ({ rideId, to, from }: { rideId: number; from?: number; to?: number }) =>
  createSelector(selectDetailsState, (state: DetailsState) => {
    const item = state.details[rideId]?.data;

    if (item) {
      const fromIndex = from ? item.path.indexOf(from) : 0;
      const toIndex = to ? item.path.indexOf(to) : item.path.length - 1;

      if (fromIndex === -1 || toIndex === -1 || fromIndex >= toIndex) {
        return {
          ...item,
          path: [],
          schedule: {
            ...item.schedule,
            segments: [],
          },
        };
      }

      return {
        ...item,
        path: item.path.slice(fromIndex, toIndex + 1),
        schedule: {
          ...item.schedule,
          segments: item.schedule.segments.slice(fromIndex, toIndex),
        },
      };
    }

    return item;
  });

export const selectRideDetailsLoading = (rideId: number) =>
  createSelector(selectDetailsState, (state: DetailsState) => state.details[rideId]?.isLoading);

export const selectRideDetailsError = (rideId: number) =>
  createSelector(selectDetailsState, (state: DetailsState) => state.details[rideId]?.error);
