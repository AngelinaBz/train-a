import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
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
import { RideEffects } from './rides/state/rides.effects';
import { rideReducer } from './rides/state/rides.reducers';
import { Routesffects } from './routes/state/routes.effects';
import { routesReducer } from './routes/state/routes.reducers';
import * as detailsEffects from './search/state/details/details.effects';
import { detailsReducer } from './search/state/details/details.reducers';
import { StationEffects } from './stations/state/station.effects';
import { stationReducer } from './stations/state/station.reducers';
import * as userEffects from './user/state/user.effects';
import { userReducer } from './user/state/user.reducers';

export const providers = [
  provideHttpClient(withInterceptors([authInterceptor])),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
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
    rides: rideReducer,
  }),
  provideEffects(
    userEffects,
    AuthEffects,
    OrderEffects,
    StationEffects,
    CarriageEffects,
    detailsEffects,
    Routesffects,
    RideEffects,
  ),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
];

export const appConfig: ApplicationConfig = {
  providers,
};
