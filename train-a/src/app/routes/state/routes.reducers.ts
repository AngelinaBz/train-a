import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { Route } from '../models/route.model';
import * as RoutesActions from './routes.actions';

export interface RoutesState {
  isLoading: boolean;
  routes: Route[];
  error: ApiError | null;
  successMessage: string | null;
}

export const initialState: RoutesState = {
  isLoading: false,
  routes: [],
  error: null,
  successMessage: null,
};

export const routesReducer = createReducer(
  initialState,
  on(RoutesActions.loadRoutes, (state): RoutesState => ({ ...state, isLoading: true, error: null, successMessage: null })),
  on(
    RoutesActions.loadRoutesSuccess,
    (state, { routes }): RoutesState => ({ ...state, routes, isLoading: false, error: null, successMessage: null }),
  ),
  on(
    RoutesActions.loadRoutesFailure,
    (state, { error }): RoutesState => ({ ...state, isLoading: false, error, successMessage: null }),
  ),
  on(RoutesActions.deleteRoute, (state): RoutesState => ({ ...state, isLoading: true, error: null, successMessage: null })),
  on(
    RoutesActions.deleteRouteSuccess,
    (state): RoutesState => ({
      ...state,
      isLoading: false,
      error: null,
      successMessage: 'The route has been successfully deleted',
    }),
  ),
  on(
    RoutesActions.deleteRouteFailure,
    (state, { error }): RoutesState => ({ ...state, isLoading: false, error, successMessage: null }),
  ),

  on(RoutesActions.createRoute, (state): RoutesState => ({ ...state, isLoading: true, error: null, successMessage: null })),
  on(
    RoutesActions.createRouteSuccess,
    (state): RoutesState => ({
      ...state,
      isLoading: false,
      error: null,
      successMessage: 'The route has been successfully created',
    }),
  ),
  on(
    RoutesActions.createRouteFailure,
    (state, { error }): RoutesState => ({ ...state, isLoading: false, error, successMessage: null }),
  ),

  on(RoutesActions.updateRoute, (state): RoutesState => ({ ...state, isLoading: true, error: null, successMessage: null })),
  on(
    RoutesActions.updateRouteSuccess,
    (state): RoutesState => ({
      ...state,
      isLoading: false,
      error: null,
      successMessage: 'The route has been successfully updated',
    }),
  ),
  on(
    RoutesActions.updateRouteFailure,
    (state, { error }): RoutesState => ({ ...state, isLoading: false, error, successMessage: null }),
  ),
);
