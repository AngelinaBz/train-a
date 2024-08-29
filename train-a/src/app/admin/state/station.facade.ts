import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Station } from '../models/map.model';
import * as StationActions from './station.actions';
import * as fromSelectors from './station.selectors';

@Injectable({
  providedIn: 'root',
})
export class StationFacade {
  allStations$ = this.store.select(fromSelectors.selectStations);
  loading$ = this.store.select(fromSelectors.selectLoading);
  loadingDeleting$ = this.store.select(fromSelectors.selectLoadingDeleting);

  constructor(private store: Store) {}

  loadStations(): void {
    this.store.dispatch(StationActions.loadStations());
  }

  createStation(station: Station, connectedTo: { id: number; distance: number }[]): void {
    this.store.dispatch(StationActions.createStation({ station, connectedTo }));
  }

  deleteStation(id: number): void {
    this.store.dispatch(StationActions.deleteStation({ id }));
  }
}
