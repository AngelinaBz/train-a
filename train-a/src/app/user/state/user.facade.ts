import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';

import * as userActions from './user.actions';
import { UserState } from './user.reducers';
import * as userSelectors from './user.selectors';

interface FacadeActionArgs {
  onSuccess?: (state: UserState) => void;
  onFailure?: (state: UserState) => void;
}

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  state$ = this.store.select(userSelectors.selectUserState);
  isLoading$ = this.store.select(userSelectors.selectIsLoading);
  errors$ = this.store.select(userSelectors.selectErrors);
  user$ = this.store.select(userSelectors.selectUser);

  constructor(private store: Store) {}

  getUserProfile({ onSuccess, onFailure }: FacadeActionArgs = {}) {
    this.store.dispatch(userActions.getUserProfile());
    return this.state$
      .pipe(
        filter((state) => !state.isLoading.getUserProfile),
        take(1),
      )
      .subscribe((state) => {
        if (!state.errors.getUserProfile) {
          onSuccess?.(state);
        } else {
          onFailure?.(state);
        }
      });
  }

  updateUserProfile({ args, onFailure, onSuccess }: FacadeActionArgs & { args: Partial<{ name: string; email: string }> }) {
    this.store.dispatch(userActions.updateUserProfile(args));
    return this.state$
      .pipe(
        filter((state) => !state.isLoading.updateUserProfile),
        take(1),
      )
      .subscribe((state) => {
        if (!state.errors.updateUserProfile) {
          onSuccess?.(state);
        } else {
          onFailure?.(state);
        }
      });
  }

  updateUserPassword({ password, onSuccess, onFailure }: FacadeActionArgs & { password: string }) {
    this.store.dispatch(userActions.updateUserPassword({ password }));
    return this.state$
      .pipe(
        filter((state) => !state.isLoading.updateUserPassword),
        take(1),
      )
      .subscribe((state) => {
        if (!state.errors.updateUserPassword) {
          onSuccess?.(state);
        } else {
          onFailure?.(state);
        }
      });
  }
}
