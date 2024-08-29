import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StationState } from './station.reducer';

export const selectStationState = createFeatureSelector<StationState>('station');

export const selectStations = createSelector(selectStationState, (state: StationState) => state.stations);

export const selectLoading = createSelector(selectStationState, (state: StationState) => state.loading);
