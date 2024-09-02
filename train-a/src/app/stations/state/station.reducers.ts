import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { Station } from '../models/station.model';
import * as StationActions from './station.actions';

export interface StationState {
  getStations: {
    isLoading: boolean;
    error: ApiError | null;
    stations: Station[];
  };
  deleteStation: {
    isLoading: boolean;
    error: ApiError | null;
  };
  createStation: {
    station: Station | null;
    isLoading: boolean;
    error: ApiError | null;
  };
}

export const initialState: StationState = {
  getStations: {
    isLoading: false,
    error: null,
    stations: [],
  },
  deleteStation: {
    isLoading: false,
    error: null,
  },
  createStation: {
    station: null,
    isLoading: false,
    error: null,
  },
};

export const stationReducer = createReducer(
  initialState,
  on(
    StationActions.loadStations,
    (state): StationState => ({ ...state, getStations: { ...state.getStations, isLoading: true } }),
  ),
  on(
    StationActions.loadStationsSuccess,
    (state, { stations }): StationState => ({ ...state, getStations: { stations, isLoading: false, error: null } }),
  ),
  on(
    StationActions.loadStationsFailure,
    (state, { error }): StationState => ({ ...state, getStations: { ...state.getStations, error, isLoading: false } }),
  ),
  on(
    StationActions.createStation,
    (state): StationState => ({
      ...state,
      createStation: {
        ...state.createStation,
        isLoading: true,
      },
    }),
  ),
  on(
    StationActions.createStationSuccess,
    (state, { station }): StationState => ({
      ...state,
      getStations: {
        ...state.getStations,
        stations: [...state.getStations.stations, station],
      },
      createStation: {
        station,
        isLoading: false,
        error: null,
      },
    }),
  ),

  on(
    StationActions.createStationFailure,
    (state, { error }): StationState => ({
      ...state,
      createStation: {
        ...state.createStation,
        error,
        station: null,
        isLoading: false,
      },
    }),
  ),
  on(
    StationActions.deleteStation,
    (state): StationState => ({
      ...state,
      deleteStation: {
        ...state.deleteStation,
        isLoading: true,
      },
    }),
  ),
  on(
    StationActions.deleteStationSuccess,
    (state, { id }): StationState => ({
      ...state,
      getStations: {
        ...state.getStations,
        stations: state.getStations.stations.filter((station) => station.id !== id),
      },
      deleteStation: {
        ...state.deleteStation,
        isLoading: false,
      },
    }),
  ),

  on(
    StationActions.deleteStationFailure,
    (state, { error }): StationState => ({
      ...state,
      deleteStation: {
        ...state.deleteStation,
        error,
        isLoading: false,
      },
    }),
  ),
);
