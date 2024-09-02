import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CarriageState } from './carriage.reducers';

export const selectCarriageState = createFeatureSelector<CarriageState>('carriage');

export const selectCarriages = createSelector(selectCarriageState, (state: CarriageState) => state.getCarriages.carriages);

export const selectIsLoading = createSelector(selectCarriageState, (state: CarriageState) => state.getCarriages.isLoading);

export const selectError = createSelector(selectCarriageState, (state: CarriageState) => state.getCarriages.error);

export const selectDeleteError = createSelector(selectCarriageState, (state: CarriageState) => state.deleteCarriage.error);
