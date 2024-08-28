import { createReducer, on } from '@ngrx/store';

import { StationList } from '../models/map.model';
import * as StationActions from './station.actions';

export interface StationState {
  stations: StationList[];
  loading: boolean;
  error: string | null;
}

export const initialState: StationState = {
  stations: [],
  loading: false,
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
    (state): StationState => ({
      ...state,
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
);
