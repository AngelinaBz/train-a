import { createReducer, on } from '@ngrx/store';

import { StationResponse } from '../models/map.model';
import * as StationActions from './station.actions';

export interface StationState {
  stations: StationResponse[];
  loading: boolean;
  loadingDeleting: boolean;
  error: string | null;
}

export const initialState: StationState = {
  stations: [],
  loading: false,
  loadingDeleting: false,
  error: null,
};

export const stationReducer = createReducer(
  initialState,
  on(
    StationActions.loadStations,
    (state): StationState => ({
      ...state,
      loading: true,
    }),
  ),
  on(
    StationActions.loadStationsSuccess,
    (state, { stations }): StationState => ({
      ...state,
      stations,
      loading: false,
    }),
  ),
  on(
    StationActions.loadStationsFailure,
    (state, { error }): StationState => ({
      ...state,
      error,
      loading: false,
    }),
  ),
  on(
    StationActions.createStation,
    (state): StationState => ({
      ...state,
      loading: true,
    }),
  ),
  on(
    StationActions.createStationSuccess,
    (state, { station }): StationState => ({
      ...state,
      stations: [...state.stations, station],
      loading: false,
    }),
  ),

  on(
    StationActions.createStationFailure,
    (state, { error }): StationState => ({
      ...state,
      error,
      loading: false,
    }),
  ),
  on(
    StationActions.deleteStation,
    (state): StationState => ({
      ...state,
      loadingDeleting: true,
    }),
  ),
  on(
    StationActions.deleteStationSuccess,
    (state, { id }): StationState => ({
      ...state,
      stations: state.stations.filter((station) => station.id !== id),
      loadingDeleting: false,
    }),
  ),

  on(
    StationActions.deleteStationFailure,
    (state, { error }): StationState => ({
      ...state,
      error,
      loadingDeleting: false,
    }),
  ),
);
