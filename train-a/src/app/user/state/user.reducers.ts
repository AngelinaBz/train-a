import { createReducer, on } from '@ngrx/store';

import ApiError from '../../shared/models/ApiError.model';
import User from '../models/User.model';
import * as userActions from './user.actions';

export interface UserState {
  isLoading: boolean;
  error: ApiError | null;
  user: User | null;
}

export const initialState: UserState = {
  isLoading: false,
  error: null,
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(
    userActions.getUserProfile,
    (state): UserState => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),
  on(
    userActions.getUserProfileSuccess,
    (state, { user }): UserState => ({
      ...state,
      isLoading: false,
      user,
    }),
  ),
  on(
    userActions.getUserProfileFailure,
    (state, { error }): UserState => ({
      ...state,
      isLoading: false,
      error,
    }),
  ),
  on(
    userActions.updateUserProfile,
    (state): UserState => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),
  on(
    userActions.updateUserProfileSuccess,
    (state, { user }): UserState => ({
      ...state,
      isLoading: false,
      user,
    }),
  ),
  on(
    userActions.updateUserProfileFailure,
    (state, { error }): UserState => ({
      ...state,
      isLoading: false,
      error,
    }),
  ),
  on(
    userActions.updateUserPassword,
    (state): UserState => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),
  on(
    userActions.updateUserPasswordSuccess,
    (state): UserState => ({
      ...state,
      isLoading: false,
    }),
  ),
  on(
    userActions.updateUserPasswordFailure,
    (state, { error }): UserState => ({
      ...state,
      isLoading: false,
      error,
    }),
  ),
);
