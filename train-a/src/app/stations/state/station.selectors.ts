import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StationState } from './station.reducers';

export const selectStationState = createFeatureSelector<StationState>('station');

export const selectGetStationsIsLoading = createSelector(
  selectStationState,
  (state: StationState) => state.getStations.isLoading,
);

export const selectGetStationsError = createSelector(selectStationState, (state: StationState) => state.getStations.error);

export const selectStations = createSelector(selectStationState, (state: StationState) => state.getStations.stations);

export const selectDeleteStationIsLoading = createSelector(
  selectStationState,
  (state: StationState) => state.deleteStation.isLoading,
);
