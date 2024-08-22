import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.reducers';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectIsLoading = createSelector(selectUserState, (state: UserState) => state.isLoading);

export const selectError = createSelector(selectUserState, (state: UserState) => state.error);

export const selectUser = createSelector(selectUserState, (state: UserState) => state.user);
