import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.reducers';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectIsLoading = createSelector(selectUserState, (state: UserState) => state.isLoading);

export const selectErrors = createSelector(selectUserState, (state: UserState) => state.errors);

export const selectUser = createSelector(selectUserState, (state: UserState) => state.user);
