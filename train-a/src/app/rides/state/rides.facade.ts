import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as rideActions from './rides.actions';
import * as rideSelectors from './rides.selectors';

@Injectable({
  providedIn: 'root',
})
export class RideFacade {
  ride$ = this.store.select(rideSelectors.selectRouteById);
  rideError$ = this.store.select(rideSelectors.selectError);
  isLoading$ = this.store.select(rideSelectors.selectIsLoading);
  successMessage$ = this.store.select(rideSelectors.selectSuccessMessage);

  constructor(private store: Store) {}

  loadRouteById(routeId: number) {
    this.store.dispatch(rideActions.loadRouteById({ routeId }));
  }
}
