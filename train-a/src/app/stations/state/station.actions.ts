import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { Station, StationWithoutId } from '../models/station.model';

export const loadStations = createAction('[Stations] Load Stations');

export const loadStationsSuccess = createAction('[Stations] Load Stations Success', props<{ stations: Station[] }>());

export const loadStationsFailure = createAction('[Stations] Load Stations Failure', props<{ error: ApiError }>());

export const createStation = createAction('[Station] Create Station', props<{ station: StationWithoutId }>());
export const createStationFailure = createAction('[Station] Create Station Failure', props<{ error: ApiError }>());
export const createStationSuccess = createAction('[Station] Create Station Success', props<{ station: Station }>());

export const deleteStation = createAction('[Station] Delete Station', props<{ id: number }>());
export const deleteStationSuccess = createAction('[Station] Delete Station Success', props<{ id: number }>());
export const deleteStationFailure = createAction('[Station] Delete Station Failure', props<{ error: ApiError }>());
