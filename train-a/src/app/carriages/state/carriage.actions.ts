import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { Carriage } from './carriage.model';

export const loadCarriages = createAction('[Carriages] Load Carriages', props<{ token: string }>());
export const loadCarriagesSuccess = createAction('[Carriages] Load Carriages Success', props<{ carriages: Carriage[] }>());
export const loadCarriagesFailure = createAction('[Carriages] Load Carriages Failure', props<{ error: ApiError }>());
