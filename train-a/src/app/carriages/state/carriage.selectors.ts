import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CarriageState } from './carriage.reducers';

export const selectCarriageState = createFeatureSelector<CarriageState>('carriage');

export const selectIsLoading = createSelector(selectCarriageState, (state: CarriageState) => state.isLoading);

export const selectError = createSelector(selectCarriageState, (state: CarriageState) => state.error);

export const selectCarriages = createSelector(selectCarriageState, (state: CarriageState) => state.carriages);
