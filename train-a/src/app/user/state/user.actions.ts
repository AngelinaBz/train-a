import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import User from '../models/User.model';

export const getUserProfile = createAction('[User] Get User Profile');
export const getUserProfileSuccess = createAction('[User] Get User Profile Success', props<{ user: User }>());
export const getUserProfileFailure = createAction('[User] Get User Profile Failure', props<{ error: ApiError }>());

export const updateUserProfile = createAction('[User] Update User Profile', props<{ name?: string; email?: string }>());
export const updateUserProfileSuccess = createAction('[User] Update User Profile Success', props<{ user: User }>());
export const updateUserProfileFailure = createAction('[User] Update User Profile Failure', props<{ error: ApiError }>());

export const updateUserPassword = createAction('[User] Update User Password', props<{ password: string }>());
export const updateUserPasswordSuccess = createAction('[User] Update User Password Success');
export const updateUserPasswordFailure = createAction('[User] Update User Password Failure', props<{ error: ApiError }>());
