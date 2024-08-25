import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  isRegistered$ = this.store.select(AuthSelectors.selectIsRegistered);
  isLoggedIn$ = this.store.select(AuthSelectors.selectIsLoggedIn);
  authToken$ = this.store.select(AuthSelectors.selectAuthToken);
  authError$ = this.store.select(AuthSelectors.selectError);

  constructor(private store: Store) {}

  signin(email: string, password: string): void {
    this.store.dispatch(AuthActions.signin({ email, password }));
  }

  signup(email: string, password: string): void {
    this.store.dispatch(AuthActions.signup({ email, password }));
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
