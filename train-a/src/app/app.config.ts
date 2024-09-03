import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import authInterceptor from './auth/interceptors/auth.interceptor';
import { AuthEffects } from './auth/state/auth.effects';
import { authReducer } from './auth/state/auth.reducers';
import { CarriageEffects } from './carriages/state/carriage.effects';
import { carriageReducer } from './carriages/state/carriage.reducers';
import { OrderEffects } from './orders/state/order.effects';
import { orderReducer } from './orders/state/order.reducers';
import { Routesffects } from './routes/state/routes.effects';
import { routesReducer } from './routes/state/routes.reducers';
import * as detailsEffects from './search/state/details/details.effects';
import { detailsReducer } from './search/state/details/details.reducers';
import { SearchEffects } from './search/state/search/search.effects';
import { searchReducer } from './search/state/search/search.reducer';
import { StationEffects } from './stations/state/station.effects';
import { stationReducer } from './stations/state/station.reducers';
import * as userEffects from './user/state/user.effects';
import { userReducer } from './user/state/user.reducers';

export const providers = [
  importProvidersFrom(HttpClientModule),
  provideHttpClient(withInterceptors([authInterceptor])),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideAnimations(),
  provideAnimationsAsync(),
  provideHttpClient(withInterceptors([authInterceptor])),
  provideStore({
    user: userReducer,
    auth: authReducer,
    station: stationReducer,
    order: orderReducer,
    carriage: carriageReducer,
    details: detailsReducer,
    routes: routesReducer,
    search: searchReducer,
  }),
  provideEffects(
    userEffects,
    AuthEffects,
    OrderEffects,
    StationEffects,
    CarriageEffects,
    SearchEffects,
    detailsEffects,
    Routesffects,
  ),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
];

export const appConfig: ApplicationConfig = {
  providers: [...providers],
};
