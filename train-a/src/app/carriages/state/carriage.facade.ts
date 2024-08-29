import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CarriageActions from './carriage.actions';
import * as CarriageSelectors from './carriage.selectors';

@Injectable({
  providedIn: 'root',
})
export class CarriageFacade {
  carriages$ = this.store.select(CarriageSelectors.selectCarriages);
  carriageError$ = this.store.select(CarriageSelectors.selectError);
  isLoading$ = this.store.select(CarriageSelectors.selectIsLoading);

  constructor(private store: Store) {}

  loadCarriages(): void {
    this.store.dispatch(CarriageActions.loadCarriages());
  }
}
