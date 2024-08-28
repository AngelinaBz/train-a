import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { AuthEffects } from './auth/state/auth.effects';
import { authReducer } from './auth/state/auth.reducers';
import { CarriageEffects } from './carriages/state/carriage.effects';
import { carriageReducer } from './carriages/state/carriage.reducers';
import { OrderEffects } from './orders/state/order.effects';
import { orderReducer } from './orders/state/order.reducers';
import { StationEffects } from './stations/state/station.effects';
import { stationReducer } from './stations/state/station.reducers';

export const providers = [
  importProvidersFrom(HttpClientModule),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideAnimationsAsync(),
  provideHttpClient(),
  provideStore({
    auth: authReducer,
    order: orderReducer,
    station: stationReducer,
    carriage: carriageReducer,
  }),
  provideEffects(AuthEffects, OrderEffects, StationEffects, CarriageEffects),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
];

export const appConfig: ApplicationConfig = {
  providers,
};
