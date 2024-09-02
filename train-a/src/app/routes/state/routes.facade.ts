import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { RouteWithoutId } from '../models/route.model';
import * as RoutesActions from './routes.actions';
import * as RoutesSelectors from './routes.selectors';

@Injectable({
  providedIn: 'root',
})
export class RoutesFacade {
  routes$ = this.store.select(RoutesSelectors.selectRoutes);
  routesError$ = this.store.select(RoutesSelectors.selectError);
  isLoading$ = this.store.select(RoutesSelectors.selectIsLoading);
  successMessage$ = this.store.select(RoutesSelectors.selectSuccessMessage);

  constructor(private store: Store) {}

  loadRoutes() {
    this.store.dispatch(RoutesActions.loadRoutes());
  }

  deleteRoute(routeId: number) {
    this.store.dispatch(RoutesActions.deleteRoute({ routeId }));
  }

  createRoute(routeData: RouteWithoutId) {
    this.store.dispatch(RoutesActions.createRoute({ route: routeData }));
  }

  updateRoute(id: number, routeData: RouteWithoutId) {
    this.store.dispatch(RoutesActions.updateRoute({ routeId: id, route: routeData }));
  }
}
