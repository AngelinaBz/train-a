import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../../shared/models/ApiError.model';
import RideDetails from '../../models/RideDetails.model';

export const loadDetails = createAction('[Search Details] Load Details', props<{ id: number }>());

export const loadDetailsSuccess = createAction(
  '[Search Details] Load Details Success',
  props<{ data: RideDetails; id: number }>(),
);

export const loadDetailsFailure = createAction('[Search Details] Load Details Failure', props<{ error: ApiError; id: number }>());
