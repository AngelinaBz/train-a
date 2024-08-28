import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as StationActions from './station.actions';
import * as StationSelectors from './station.selectors';

@Injectable({
  providedIn: 'root',
})
export class StationFacade {
  stations$ = this.store.select(StationSelectors.selectStations);
  isLoading$ = this.store.select(StationSelectors.selectIsLoading);
  stationError$ = this.store.select(StationSelectors.selectError);

  constructor(private store: Store) {}

  loadStations(token: string): void {
    this.store.dispatch(StationActions.loadStations({ token }));
  }
}
