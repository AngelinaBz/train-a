import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../../shared/models/ApiError.model';
import { SearchResult } from '../../models/Search.model';
import * as SearchActions from './search.actions';

export interface SearchState {
  searchResults: SearchResult | null;
  isLoading: boolean;
  error: ApiError | null;
}

export const initialState: SearchState = {
  searchResults: null,
  error: null,
  isLoading: false,
};

export const searchReducer = createReducer(
  initialState,
  on(
    SearchActions.performSearch,
    (state): SearchState => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    SearchActions.performSearchSuccess,
    (state, { searchResults }): SearchState => ({
      ...state,
      searchResults,
      isLoading: false,
    }),
  ),
  on(
    SearchActions.performSearchFailure,
    (state, { error }): SearchState => ({
      ...state,
      isLoading: false,
      error,
    }),
  ),
);
