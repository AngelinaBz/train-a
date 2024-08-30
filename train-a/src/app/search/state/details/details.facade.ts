import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as DetailsActions from './details.actions';
import * as DetailsSelectors from './details.selectors';

@Injectable({
  providedIn: 'root',
})
export class DetailsFacade {
  constructor(private store: Store) {}

  loadDetails(rideId: number): void {
    this.store.dispatch(DetailsActions.loadDetails({ id: rideId }));
  }

  getRideDetails(rideId: number) {
    return this.store.select(DetailsSelectors.selectRideDetails(rideId));
  }

  getRideDetailsLoading(rideId: number) {
    return this.store.select(DetailsSelectors.selectRideDetailsLoading(rideId));
  }

  getRideDetailsError(rideId: number) {
    return this.store.select(DetailsSelectors.selectRideDetailsError(rideId));
  }
}
