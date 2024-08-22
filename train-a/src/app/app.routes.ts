import { Routes } from '@angular/router';

import { SignupComponent } from './auth/pages/signup/signup.component';
import { ProfilePageComponent } from './user/pages/profile-page/profile-page.component';

export const paths = {
  signup: 'signup',
  login: 'login',
  profile: 'profile',
} as const;

export const routes: Routes = [
  { path: paths.signup, component: SignupComponent },
  { path: paths.profile, component: ProfilePageComponent },
];
