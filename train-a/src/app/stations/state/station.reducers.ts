import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import * as StationActions from './station.actions';
import { Station } from './station.model';

export interface StationState {
  isLoading: boolean;
  stations: Station[];
  error: ApiError | null;
}

export const initialState: StationState = {
  isLoading: false,
  stations: [],
  error: null,
};

export const stationReducer = createReducer(
  initialState,
  on(StationActions.loadStations, (state): StationState => ({ ...state, isLoading: true, error: null })),
  on(
    StationActions.loadStationsSuccess,
    (state, { stations }): StationState => ({ ...state, stations, isLoading: false, error: null }),
  ),
  on(StationActions.loadStationsFailure, (state, { error }): StationState => ({ ...state, isLoading: false, error })),
);
