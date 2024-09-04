import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CarriageActions from './carriage.actions';
import { Carriage } from './carriage.model';
import * as CarriageSelectors from './carriage.selectors';

@Injectable({
  providedIn: 'root',
})
export class CarriageFacade {
  carriages$ = this.store.select(CarriageSelectors.selectCarriages);
  isLoading$ = this.store.select(CarriageSelectors.selectIsLoading);
  carriageError$ = this.store.select(CarriageSelectors.selectError);
  deleteError$ = this.store.select(CarriageSelectors.selectDeleteError);

  constructor(private store: Store) {}

  loadCarriages(): void {
    this.store.dispatch(CarriageActions.loadCarriages());
  }

  createCarriage(carriage: Carriage): void {
    this.store.dispatch(CarriageActions.createCarriage({ carriage }));
  }

  updateCarriage(carriage: Carriage): void {
    this.store.dispatch(CarriageActions.updateCarriage({ carriage }));
  }

  deleteCarriage(code: string): void {
    this.store.dispatch(CarriageActions.deleteCarriage({ code }));
  }
}
