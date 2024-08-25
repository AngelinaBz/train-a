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
import * as userEffects from './user/state/user.effects';
import { userReducer } from './user/state/user.reducers';

export const providers = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideAnimationsAsync(),
  provideHttpClient(withInterceptors([authInterceptor])),
  provideStore({
    user: userReducer,
    auth: authReducer,
  }),
  provideEffects(userEffects, AuthEffects),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
];

export const appConfig: ApplicationConfig = {
  providers,
};
