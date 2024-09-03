import { createAction, props } from '@ngrx/store';

import { Carriage, Route, SearchCriteria, SearchResult, StationInfo } from '../../../shared/models/search.models';

export const performSearch = createAction('[Search] Perform Search', props<{ criteria: SearchCriteria }>());

export const performSearchSuccess = createAction('[Search] Perform Search Success', props<{ searchResults: SearchResult }>());

export const performSearchFailure = createAction('[Search] Perform Search Failure', props<{ error: string }>());

export const loadStations = createAction('[Search] Load Stations');

export const loadStationsSuccess = createAction('[Search] Load Stations Success', props<{ stations: StationInfo[] }>());

export const loadStationsFailure = createAction('[Search] Load Stations Failure', props<{ error: string }>());

export const loadCarriages = createAction('[Search] Load Carriages');

export const loadCarriagesSuccess = createAction('[Search] Load Carriages Success', props<{ carriages: Carriage[] }>());

export const loadCarriagesFailure = createAction('[Search] Load Carriages Failure', props<{ error: string }>());

export const loadRouteInfo = createAction('[Search] Load Route Info', props<{ routeId: number }>());

export const loadRouteInfoSuccess = createAction('[Search] Load Route Info Success', props<{ routeInfo: Route }>());

export const loadRouteInfoFailure = createAction('[Search] Load Route Info Failure', props<{ error: string }>());
