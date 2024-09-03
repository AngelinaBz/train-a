import { createReducer, on } from '@ngrx/store';

import * as SearchActions from './search.actions';
import { SearchState } from './search.state';

export const initialState: SearchState = {
  searchResults: null,
  error: null,
  stations: [],
  loading: false,
  carriages: [],
  routeInfo: null,
};

export const searchReducer = createReducer(
  initialState,
  on(
    SearchActions.loadStations,
    (state): SearchState => ({
      ...state,
      loading: true,
      error: null,
    }),
  ),
  on(
    SearchActions.loadStationsSuccess,
    (state, { stations }): SearchState => ({
      ...state,
      stations,
      loading: false,
      error: null,
    }),
  ),
  on(
    SearchActions.loadStationsFailure,
    (state, { error }): SearchState => ({
      ...state,
      loading: false,
      error,
    }),
  ),
  on(
    SearchActions.performSearch,
    (state): SearchState => ({
      ...state,
      loading: true,
      searchResults: null,
      error: null,
    }),
  ),
  on(
    SearchActions.performSearchSuccess,
    (state, { searchResults }): SearchState => ({
      ...state,
      searchResults,
      loading: false,
    }),
  ),
  on(
    SearchActions.performSearchFailure,
    (state, { error }): SearchState => ({
      ...state,
      loading: false,
      error,
    }),
  ),
);
