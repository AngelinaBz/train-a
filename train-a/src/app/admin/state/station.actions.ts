import { createAction, props } from '@ngrx/store';

import { Station, StationList } from '../models/map.model';

export const loadStations = createAction('[Station] Load Stations');

export const loadStationsSuccess = createAction('[Station] Load Stations Success', props<{ stations: StationList[] }>());

export const loadStationsFailure = createAction('[Station] Load Stations Failure', props<{ error: string }>());

export const createStation = createAction('[Station] Create Station', props<{ station: Station }>());

export const createStationFailure = createAction('[Station] Create Station Failure', props<{ error: string }>());

export const createStationSuccess = createAction(
  '[Station] Create Station Success',
  props<{ id: number; station: StationList }>(),
);

export const deleteStation = createAction('[Station] Delete Station', props<{ id: number }>());

export const deleteStationSuccess = createAction('[Station] Delete Station Success', props<{ id: number }>());

export const deleteStationFailure = createAction('[Station] Delete Station Failure', props<{ error: string }>());
