import { createReducer, on } from '@ngrx/store';

import { ApiError } from '../../shared/models/ApiError.model';
import User from '../models/User.model';
import UserWithId from '../models/UserWithId';
import * as userActions from './user.actions';

export interface UserState {
  isLoading: {
    getUserProfile: boolean;
    updateUserProfile: boolean;
    updateUserPassword: boolean;
    getAllUsers: boolean;
  };
  errors: {
    getUserProfile: ApiError | null;
    updateUserProfile: ApiError | null;
    updateUserPassword: ApiError | null;
    getAllUsers: ApiError | null;
  };
  user: User | null;
  users: UserWithId[] | [];
}

export const initialState: UserState = {
  isLoading: {
    getUserProfile: false,
    updateUserProfile: false,
    updateUserPassword: false,
    getAllUsers: false,
  },
  errors: {
    getUserProfile: null,
    updateUserProfile: null,
    updateUserPassword: null,
    getAllUsers: null,
  },
  user: null,
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(
    userActions.getUserProfile,
    (state): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        getUserProfile: true,
      },
      errors: {
        ...state.errors,
        getUserProfile: null,
      },
    }),
  ),
  on(
    userActions.getUserProfileSuccess,
    (state, { user }): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        getUserProfile: false,
      },
      user,
    }),
  ),
  on(
    userActions.getUserProfileFailure,
    (state, { error }): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        getUserProfile: false,
      },
      errors: {
        ...state.errors,
        getUserProfile: error,
      },
    }),
  ),
  on(
    userActions.updateUserProfile,
    (state): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        updateUserProfile: true,
      },
      errors: {
        ...state.errors,
        updateUserProfile: null,
      },
    }),
  ),
  on(
    userActions.updateUserProfileSuccess,
    (state, { user }): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        updateUserProfile: false,
      },
      user,
    }),
  ),
  on(
    userActions.updateUserProfileFailure,
    (state, { error }): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        updateUserProfile: false,
      },
      errors: {
        ...state.errors,
        updateUserProfile: error,
      },
    }),
  ),
  on(
    userActions.updateUserPassword,
    (state): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        updateUserPassword: true,
      },
      errors: {
        ...state.errors,
        updateUserPassword: null,
      },
    }),
  ),
  on(
    userActions.updateUserPasswordSuccess,
    (state): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        updateUserPassword: false,
      },
    }),
  ),
  on(
    userActions.updateUserPasswordFailure,
    (state, { error }): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        updateUserPassword: false,
      },
      errors: {
        ...state.errors,
        updateUserPassword: error,
      },
    }),
  ),
  on(
    userActions.getAllUsers,
    (state): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        getAllUsers: true,
      },
      errors: {
        ...state.errors,
        getAllUsers: null,
      },
    }),
  ),
  on(
    userActions.getAllUsersSuccess,
    (state, { users }): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        getAllUsers: false,
      },
      users,
    }),
  ),
  on(
    userActions.getAllUsersFailure,
    (state, { error }): UserState => ({
      ...state,
      isLoading: {
        ...state.isLoading,
        getAllUsers: false,
      },
      errors: {
        ...state.errors,
        getAllUsers: error,
      },
    }),
  ),
);
