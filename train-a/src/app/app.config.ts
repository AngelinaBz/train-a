import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { StationEffects } from './admin/state/station.effects';
import { stationReducer } from './admin/state/station.reducer';
import { routes } from './app.routes';
import authInterceptor from './auth/interceptor/auth.interceptor';
import { AuthEffects } from './auth/state/auth.effects';
import { authReducer } from './auth/state/auth.reducers';

export const providers = [
  importProvidersFrom(HttpClientModule),
  provideHttpClient(withInterceptors([authInterceptor])),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideAnimationsAsync(),
  provideHttpClient(),
  provideStore({
    auth: authReducer,
    station: stationReducer,
  }),
  provideEffects(AuthEffects),
  provideEffects(StationEffects),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
];

export const appConfig: ApplicationConfig = {
  providers,
};
