import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as userActions from './user.actions';
import * as userSelectors from './user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  isLoading$ = this.store.select(userSelectors.selectIsLoading);
  error$ = this.store.select(userSelectors.selectError);
  user$ = this.store.select(userSelectors.selectUser);

  constructor(private store: Store) {}

  getUserProfile() {
    this.store.dispatch(userActions.getUserProfile());
  }

  updateUserProfile(props: Partial<{ name: string; email: string }>) {
    this.store.dispatch(userActions.updateUserProfile(props));
  }

  updateUserPassword(password: string) {
    this.store.dispatch(userActions.updateUserPassword({ password }));
  }
}
