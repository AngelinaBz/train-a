import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SearchState } from './search.state';

export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectSearchResults = createSelector(selectSearchState, (state: SearchState) => state.searchResults);

export const selectError = createSelector(selectSearchState, (state: SearchState) => state.error);

export const selectStations = createSelector(selectSearchState, (state: SearchState) => state.stations);

export const selectLoading = createSelector(selectSearchState, (state: SearchState) => state.loading);
