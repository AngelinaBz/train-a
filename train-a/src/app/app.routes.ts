import { Routes } from '@angular/router';

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
];
