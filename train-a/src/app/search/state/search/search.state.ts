import { Carriage, Route, SearchResult, StationInfo } from '../../../shared/models/search.models';

export interface SearchState {
  searchResults: SearchResult | null;
  stations: StationInfo[];
  carriages: Carriage[];
  routeInfo: Route | null;
  loading: boolean;
  error: string | null;
}

export const initialSearchState: SearchState = {
  searchResults: null,
  stations: [],
  carriages: [],
  routeInfo: null,
  loading: false,
  error: null,
};
