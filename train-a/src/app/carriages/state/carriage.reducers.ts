import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import * as CarriageActions from './carriage.actions';
import { Carriage } from './carriage.model';

export interface CarriageState {
  getCarriages: {
    isLoading: boolean;
    carriages: Carriage[];
    error: ApiError | null;
  };
  createCarriage: {
    carriage: Carriage | null;
    isLoading: boolean;
    error: ApiError | null;
  };
  updateCarriage: {
    carriage: Carriage | null;
    isLoading: boolean;
    error: ApiError | null;
  };
  deleteCarriage: {
    isLoading: boolean;
    error: ApiError | null;
  };
}

export const initialState: CarriageState = {
  getCarriages: {
    isLoading: false,
    carriages: [],
    error: null,
  },
  createCarriage: {
    carriage: null,
    isLoading: false,
    error: null,
  },
  updateCarriage: {
    carriage: null,
    isLoading: false,
    error: null,
  },
  deleteCarriage: {
    isLoading: false,
    error: null,
  },
};

export const carriageReducer = createReducer(
  initialState,

  on(
    CarriageActions.loadCarriages,
    (state): CarriageState => ({
      ...state,
      getCarriages: {
        ...state.getCarriages,
        isLoading: true,
      },
    }),
  ),
  on(
    CarriageActions.loadCarriagesSuccess,
    (state, { carriages }): CarriageState => ({
      ...state,
      getCarriages: {
        carriages,
        isLoading: false,
        error: null,
      },
    }),
  ),
  on(
    CarriageActions.loadCarriagesFailure,
    (state, { error }): CarriageState => ({
      ...state,
      getCarriages: {
        ...state.getCarriages,
        error,
        isLoading: false,
      },
    }),
  ),

  on(
    CarriageActions.createCarriage,
    (state): CarriageState => ({
      ...state,
      createCarriage: {
        ...state.createCarriage,
        isLoading: true,
      },
    }),
  ),
  on(
    CarriageActions.createCarriageSuccess,
    (state, { carriage }): CarriageState => ({
      ...state,
      getCarriages: {
        ...state.getCarriages,
        carriages: [...state.getCarriages.carriages, carriage],
      },
      createCarriage: {
        carriage,
        isLoading: false,
        error: null,
      },
    }),
  ),
  on(
    CarriageActions.createCarriageFailure,
    (state, { error }): CarriageState => ({
      ...state,
      createCarriage: {
        ...state.createCarriage,
        error,
        isLoading: false,
      },
    }),
  ),
  on(
    CarriageActions.updateCarriage,
    (state): CarriageState => ({
      ...state,
      updateCarriage: {
        ...state.updateCarriage,
        isLoading: true,
      },
    }),
  ),
  on(
    CarriageActions.updateCarriageSuccess,
    (state, { carriage }): CarriageState => ({
      ...state,
      updateCarriage: {
        carriage,
        isLoading: false,
        error: null,
      },
      getCarriages: {
        ...state.getCarriages,
        carriages: state.getCarriages.carriages.map((c) => (c.code === carriage.code ? carriage : c)),
      },
    }),
  ),
  on(
    CarriageActions.updateCarriageFailure,
    (state, { error }): CarriageState => ({
      ...state,
      updateCarriage: {
        ...state.updateCarriage,
        error,
        isLoading: false,
      },
    }),
  ),
  on(
    CarriageActions.deleteCarriage,
    (state): CarriageState => ({
      ...state,
    }),
  ),
  on(
    CarriageActions.deleteCarriageSuccess,
    (state, { code }): CarriageState => ({
      ...state,
      getCarriages: {
        ...state.getCarriages,
        carriages: state.getCarriages.carriages.filter((c) => c.code !== code),
      },
    }),
  ),
);
