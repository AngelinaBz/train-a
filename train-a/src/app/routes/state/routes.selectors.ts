import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RoutesState } from './routes.reducers';

export const selectRoutesState = createFeatureSelector<RoutesState>('routes');

export const selectIsLoading = createSelector(selectRoutesState, (state: RoutesState) => state.isLoading);

export const selectError = createSelector(selectRoutesState, (state: RoutesState) => state.error);

export const selectRoutes = createSelector(selectRoutesState, (state: RoutesState) => state.routes);

export const selectIsDeleteSuccess = createSelector(selectRoutesState, (state: RoutesState) => state.isDeleteSuccess);
