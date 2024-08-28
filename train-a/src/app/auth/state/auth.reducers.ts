import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isLoading: boolean;
  isRegistered: boolean;
  isLoggedIn: boolean;
  token: string | null;
  error: ApiError | null;
}

export const initialState: AuthState = {
  isLoading: false,
  isRegistered: false,
  isLoggedIn: !!localStorage.getItem('auth_token'),
  token: localStorage.getItem('auth_token'),
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.signin,
    (state): AuthState => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),
  on(
    AuthActions.signinSuccess,
    (state, { token }): AuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      token,
      error: null,
    }),
  ),
  on(
    AuthActions.signinFailure,
    (state, { error }): AuthState => ({
      ...state,
      isLoading: false,
      error,
    }),
  ),
  on(
    AuthActions.signup,
    (state): AuthState => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),
  on(
    AuthActions.signupSuccess,
    (state): AuthState => ({
      ...state,
      isLoading: false,
      isRegistered: true,
      error: null,
    }),
  ),
  on(
    AuthActions.signupFailure,
    (state, { error }): AuthState => ({
      ...state,
      isLoading: false,
      error,
    }),
  ),
  on(
    AuthActions.logout,
    (state): AuthState => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    AuthActions.logoutSuccess,
    (state): AuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      token: null,
      error: null,
    }),
  ),
);
