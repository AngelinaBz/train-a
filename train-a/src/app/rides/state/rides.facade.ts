import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Segment } from '../models/ride.model';
import * as rideActions from './rides.actions';
import * as rideSelectors from './rides.selectors';

@Injectable({
  providedIn: 'root',
})
export class RideFacade {
  ride$ = this.store.select(rideSelectors.selectRouteById);
  rideError$ = this.store.select(rideSelectors.selectError);
  isLoading$ = this.store.select(rideSelectors.selectIsLoading);
  successMessage$ = this.store.select(rideSelectors.selectRideSuccessMessage);

  constructor(private store: Store) {}

  loadRouteById(routeId: number) {
    this.store.dispatch(rideActions.loadRouteById({ routeId }));
  }

  createRide(routeId: number, segments: Segment[]) {
    this.store.dispatch(rideActions.createRide({ routeId, segments }));
  }

  updateRide(routeId: number, rideId: number, segments: Segment[]) {
    this.store.dispatch(rideActions.updateRide({ routeId, rideId, segments }));
  }

  deleteRide(routeId: number, rideId: number) {
    this.store.dispatch(rideActions.deleteRide({ routeId, rideId }));
  }
}
