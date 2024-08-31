import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as RoutesActions from './routes.actions';
import * as RoutesSelectors from './routes.selectors';

@Injectable({
  providedIn: 'root',
})
export class RoutesFacade {
  routes$ = this.store.select(RoutesSelectors.selectRoutes);
  routesError$ = this.store.select(RoutesSelectors.selectError);
  isLoading$ = this.store.select(RoutesSelectors.selectIsLoading);
  isDeleteSuccess$ = this.store.select(RoutesSelectors.selectIsDeleteSuccess);

  constructor(private store: Store) {}

  loadRoutes(): void {
    this.store.dispatch(RoutesActions.loadRoutes());
  }

  deleteRoute(routeId: number): void {
    this.store.dispatch(RoutesActions.deleteRoute({ routeId }));
  }
}
