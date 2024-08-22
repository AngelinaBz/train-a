import { createAction, props } from '@ngrx/store';

import ApiError from '../../shared/models/ApiError.model';
import User from '../models/User.model';

export const getUserProfile = createAction('[Profile] Get User Profile');
export const getUserProfileSuccess = createAction('[Profile] Get User Profile Success', props<{ user: User }>());
export const getUserProfileFailure = createAction('[Profile] Get User Profile Failure', props<{ error: ApiError }>());

export const updateUserProfile = createAction('[Profile] Update User Profile', props<{ name?: string; email?: string }>());
export const updateUserProfileSuccess = createAction('[Profile] Update User Profile Success', props<{ user: User }>());
export const updateUserProfileFailure = createAction('[Profile] Update User Profile Failure', props<{ error: ApiError }>());
