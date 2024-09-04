import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsLoading = createSelector(selectAuthState, (state: AuthState) => state.isLoading);

export const selectError = createSelector(selectAuthState, (state: AuthState) => state.error);

export const selectIsLoggedIn = createSelector(selectAuthState, (state: AuthState) => state.isLoggedIn);

export const selectIsRegistered = createSelector(selectAuthState, (state: AuthState) => state.isRegistered);

export const selectAuthToken = createSelector(selectAuthState, (state: AuthState) => state.token);
