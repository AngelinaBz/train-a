import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { Route } from '../models/route.model';
import * as RoutesActions from './routes.actions';

export interface RoutesState {
  isLoading: boolean;
  isDeleteSuccess: boolean;
  routes: Route[];
  error: ApiError | null;
}

export const initialState: RoutesState = {
  isLoading: false,
  isDeleteSuccess: false,
  routes: [],
  error: null,
};

export const routesReducer = createReducer(
  initialState,
  on(RoutesActions.loadRoutes, (state): RoutesState => ({ ...state, isLoading: true, error: null })),
  on(RoutesActions.loadRoutesSuccess, (state, { routes }): RoutesState => ({ ...state, routes, isLoading: false, error: null })),
  on(RoutesActions.loadRoutesFailure, (state, { error }): RoutesState => ({ ...state, isLoading: false, error })),
  on(RoutesActions.deleteRoute, (state): RoutesState => ({ ...state, isLoading: true, error: null })),
  on(
    RoutesActions.deleteRouteSuccess,
    (state): RoutesState => ({ ...state, isLoading: false, error: null, isDeleteSuccess: true }),
  ),
  on(RoutesActions.deleteRouteFailure, (state, { error }): RoutesState => ({ ...state, isLoading: false, error })),
  on(
    RoutesActions.updateRoutes,
    (state, { routes }): RoutesState => ({
      ...state,
      routes,
      isLoading: false,
      error: null,
    }),
  ),
);
