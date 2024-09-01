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
  successMessage$ = this.store.select(RoutesSelectors.selectSuccessMessage);

  constructor(private store: Store) {}

  loadRoutes(): void {
    this.store.dispatch(RoutesActions.loadRoutes());
  }

  deleteRoute(routeId: number): void {
    this.store.dispatch(RoutesActions.deleteRoute({ routeId }));
  }

  createRoute(path: number[], carriages: string[]): void {
    this.store.dispatch(RoutesActions.createRoute({ path, carriages }));
  }

  updateRoute(id: number, path: number[], carriages: string[]): void {
    this.store.dispatch(RoutesActions.updateRoute({ id, path, carriages }));
  }
}
