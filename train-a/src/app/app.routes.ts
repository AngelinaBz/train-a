import { Routes } from '@angular/router';

import { CarriagesComponent } from './admin/components/carriages/carriages.component';
import { StationsComponent } from './admin/components/stations/stations.component';
import { AdminComponent } from './admin/pages/admin/admin.component';
import { authGuard } from './auth/guards/auth/auth.guard';
import { SigninComponent } from './auth/pages/signin/signin.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { OrdersPageComponent } from './orders/pages/orders-page/orders-page.component';
import { paths } from './shared/configs/paths';
import { ProfilePageComponent } from './user/pages/profile-page/profile-page.component';

export const routes: Routes = [
  {
    path: paths.signup,
    component: SignupComponent,
    canActivate: [
      authGuard({
        needAuth: false,
        redirectTo: paths.main,
      }),
    ],
  },
  {
    path: paths.profile,
    component: ProfilePageComponent,
    canActivate: [authGuard({ needAuth: true, redirectTo: paths.signin })],
  },
  {
    path: paths.orders,
    component: OrdersPageComponent,
    canActivate: [authGuard({ needAuth: true, redirectTo: paths.signin })],
  },
  {
    path: paths.signin,
    component: SigninComponent,
    canActivate: [
      authGuard({
        needAuth: false,
        redirectTo: paths.main,
      }),
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'stations', pathMatch: 'full' },
      { path: 'stations', component: StationsComponent },
      { path: 'carriages', component: CarriagesComponent },
      // { path: 'routes', component: RoutesComponent }
    ],
  },
  { path: 'signup', component: SignupComponent, canActivate: [authGuard] },
  { path: 'signin', component: SigninComponent, canActivate: [authGuard] },
];
