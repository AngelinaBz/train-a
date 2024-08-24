import { Routes } from '@angular/router';

import { authGuard } from './auth/guards/auth/auth.guard';
import { SigninComponent } from './auth/pages/signin/signin.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { ProfilePageComponent } from './user/pages/profile-page/profile-page.component';

export const paths = {
  main: '',
  signup: 'signup',
  signin: 'signin',
  profile: 'profile',
} as const;

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
