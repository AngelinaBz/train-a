import { Routes } from '@angular/router';

import { authGuard } from './auth/guards/auth/auth.guard';
import { SigninComponent } from './auth/pages/signin/signin.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { ProfilePageComponent } from './user/pages/profile-page/profile-page.component';

export const paths = {
  signup: 'signup',
  signin: 'signin',
  profile: 'profile',
} as const;

export const routes: Routes = [
  { path: paths.signup, component: SignupComponent },
  { path: paths.profile, component: ProfilePageComponent },
  { path: paths.signin, component: SigninComponent, canActivate: [authGuard] },
];
