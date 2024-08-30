import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import * as CarriageActions from './carriage.actions';
import { Carriage } from './carriage.model';

export interface CarriageState {
  isLoading: boolean;
  carriages: Carriage[];
  error: ApiError | null;
}

export const initialState: CarriageState = {
  isLoading: false,
  carriages: [],
  error: null,
};

export const carriageReducer = createReducer(
  initialState,
  on(CarriageActions.loadCarriages, (state): CarriageState => ({ ...state, isLoading: true, error: null })),
  on(
    CarriageActions.loadCarriagesSuccess,
    (state, { carriages }): CarriageState => ({ ...state, carriages, isLoading: false, error: null }),
  ),
  on(CarriageActions.loadCarriagesFailure, (state, { error }): CarriageState => ({ ...state, isLoading: false, error })),
);
