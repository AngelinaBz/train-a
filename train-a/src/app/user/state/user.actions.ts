import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import User from '../models/User.model';
import UserWithId from '../models/UserWithId';

export const getUserProfile = createAction('[User] Get User Profile');
export const getUserProfileSuccess = createAction('[User] Get User Profile Success', props<{ user: User }>());
export const getUserProfileFailure = createAction('[User] Get User Profile Failure', props<{ error: ApiError }>());

export const updateUserProfile = createAction('[User] Update User Profile', props<{ name?: string; email?: string }>());
export const updateUserProfileSuccess = createAction('[User] Update User Profile Success', props<{ user: User }>());
export const updateUserProfileFailure = createAction('[User] Update User Profile Failure', props<{ error: ApiError }>());

export const updateUserPassword = createAction('[User] Update User Password', props<{ password: string }>());
export const updateUserPasswordSuccess = createAction('[User] Update User Password Success');
export const updateUserPasswordFailure = createAction('[User] Update User Password Failure', props<{ error: ApiError }>());

export const getAllUsers = createAction('[Users] Get All Users');
export const getAllUsersSuccess = createAction('[Users] Get All Users Success', props<{ users: UserWithId[] }>());
export const getAllUsersFailure = createAction('[Users] Get All Users Failure', props<{ error: ApiError }>());
