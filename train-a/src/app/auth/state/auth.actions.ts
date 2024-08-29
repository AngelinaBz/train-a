import { createAction, props } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';

export const signin = createAction('[Auth] Sign In', props<{ email: string; password: string }>());
export const signinSuccess = createAction('[Auth] Sign In Success', props<{ token: string }>());
export const signinFailure = createAction('[Auth] Sign In Failure', props<{ error: ApiError }>());

export const signup = createAction('[Auth] Sign Up', props<{ email: string; password: string }>());
export const signupSuccess = createAction('[Auth] Sign Up Success');
export const signupFailure = createAction('[Auth] Sign Up Failure', props<{ error: ApiError }>());

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
