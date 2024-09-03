import { Routes } from '@angular/router';

import { AdminComponent } from './admin/pages/admin/admin.component';
import { authGuard } from './auth/guards/auth/auth.guard';
import { SigninComponent } from './auth/pages/signin/signin.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { CarriageAdminPageComponent } from './carriages/pages/carriage-admin-page/carriage-admin-page.component';
import { OrdersComponent } from './orders/pages/orders-page/orders.component';
import { RoutesAdminPageComponent } from './routes/pages/routes-admin-page/routes-admin-page.component';
import { DetailsPageComponent } from './search/pages/details-page/details-page.component';
import { paths } from './shared/configs/paths';
import { StationAdminPageComponent } from './stations/pages/station-admin-page/station-admin-page.component';
import { roleGuard } from './user/guards/role/role.guard';
import { Roles } from './user/models/Roles.model';
import { ProfilePageComponent } from './user/pages/profile-page/profile-page.component';

const title = 'Train-A';

export const routes: Routes = [
  {
    title: `${title} - Signup`,
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
    title: `${title} - Profile`,
    path: paths.profile,
    component: ProfilePageComponent,
    canActivate: [authGuard({ needAuth: true, redirectTo: paths.signin })],
  },
  {
    title: `${title} - Orders`,
    path: paths.orders,
    component: OrdersComponent,
    canActivate: [authGuard({ needAuth: true, redirectTo: paths.signin })],
  },
  {
    title: `${title} - Signin`,
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
    title: `${title} - Trip`,
    path: `${paths.trip}/:rideId`,
    component: DetailsPageComponent,
  },
  {
    title: `${title} - Admin`,
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
      { title: `${title} - Admin Stations`, path: 'stations', component: StationAdminPageComponent },
      { title: `${title} - Admin Carriages`, path: 'carriages', component: CarriageAdminPageComponent },
      { title: `${title} - Admin Routes`, path: 'routes', component: RoutesAdminPageComponent },
    ],
  },

  { path: '**', redirectTo: paths.main },
];
