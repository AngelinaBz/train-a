import { Routes } from '@angular/router';

import { AdminComponent } from './admin/pages/admin/admin.component';
import { authGuard } from './auth/guards/auth/auth.guard';
import { SigninComponent } from './auth/pages/signin/signin.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { CarriageAdminPageComponent } from './carriages/pages/carriage-admin-page/carriage-admin-page.component';
import { OrdersComponent } from './orders/pages/orders-page/orders.component';
import { paths } from './shared/configs/paths';
import { StationAdminPageComponent } from './stations/pages/station-admin-page/station-admin-page.component';
import { roleGuard } from './user/guards/role/role.guard';
import { Roles } from './user/models/Roles.model';
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
    component: OrdersComponent,
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
    canActivate: [
      authGuard({ needAuth: true, redirectTo: paths.signin }),
      roleGuard({
        roles: [Roles.MANAGER],
        redirectTo: paths.main,
      }),
    ],
    children: [
      { path: '', redirectTo: 'stations', pathMatch: 'full' },
      { path: 'stations', component: StationAdminPageComponent },
      { path: 'carriages', component: CarriageAdminPageComponent },
      // { path: 'routes', component: RoutesComponent }
    ],
  },
];
