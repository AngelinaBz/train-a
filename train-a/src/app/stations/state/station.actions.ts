import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { Station } from './station.model';

export const loadStations = createAction('[Stations] Load Stations');

export const loadStationsSuccess = createAction('[Stations] Load Stations Success', props<{ stations: Station[] }>());

export const loadStationsFailure = createAction('[Stations] Load Stations Failure', props<{ error: ApiError }>());
