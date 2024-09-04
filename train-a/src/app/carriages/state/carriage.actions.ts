import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import { Carriage } from './carriage.model';

export const loadCarriages = createAction('[Carriages] Load Carriages');
export const loadCarriagesSuccess = createAction('[Carriages] Load Carriages Success', props<{ carriages: Carriage[] }>());
export const loadCarriagesFailure = createAction('[Carriages] Load Carriages Failure', props<{ error: ApiError }>());

export const createCarriage = createAction('[Carriages] Create Carriage', props<{ carriage: Carriage }>());
export const createCarriageSuccess = createAction('[Carriages] Create Carriage Success', props<{ carriage: Carriage }>());
export const createCarriageFailure = createAction('[Carriages] Create Carriage Failure', props<{ error: ApiError }>());

export const updateCarriage = createAction('[Carriages] Update Carriage', props<{ carriage: Carriage }>());
export const updateCarriageSuccess = createAction('[Carriages] Update Carriage Success', props<{ carriage: Carriage }>());
export const updateCarriageFailure = createAction('[Carriages] Update Carriage Failure', props<{ error: ApiError }>());

export const deleteCarriage = createAction('[Carriages] Delete Carriage', props<{ code: string }>());
export const deleteCarriageSuccess = createAction('[Carriages] Delete Carriage Success', props<{ code: string }>());
export const deleteCarriageFailure = createAction('[Carriages] Delete Carriage Failure', props<{ error: ApiError }>());
