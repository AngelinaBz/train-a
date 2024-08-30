import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StationState } from './station.reducers';

export const selectStationState = createFeatureSelector<StationState>('station');

export const selectIsLoading = createSelector(selectStationState, (state: StationState) => state.isLoading);

export const selectError = createSelector(selectStationState, (state: StationState) => state.error);

export const selectStations = createSelector(selectStationState, (state: StationState) => state.stations);
