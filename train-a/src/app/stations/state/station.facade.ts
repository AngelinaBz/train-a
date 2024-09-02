import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { StationWithoutId } from '../models/station.model';
import * as StationActions from './station.actions';
import * as StationSelectors from './station.selectors';

@Injectable({
  providedIn: 'root',
})
export class StationFacade {
  stations$ = this.store.select(StationSelectors.selectStations);
  isLoading$ = this.store.select(StationSelectors.selectGetStationsIsLoading);
  stationError$ = this.store.select(StationSelectors.selectGetStationsError);
  loadingDeleting$ = this.store.select(StationSelectors.selectDeleteStationIsLoading);

  constructor(private store: Store) {}

  loadStations(): void {
    this.store.dispatch(StationActions.loadStations());
  }

  createStation(station: StationWithoutId): void {
    this.store.dispatch(StationActions.createStation({ station }));
  }

  deleteStation(id: number): void {
    this.store.dispatch(StationActions.deleteStation({ id }));
  }
}
