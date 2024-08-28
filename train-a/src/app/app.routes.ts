import { Routes } from '@angular/router';

import { authGuard } from './auth/guards/auth/auth.guard';
import { SigninComponent } from './auth/pages/signin/signin.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { OrdersComponent } from './orders/pages/orders.component';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent, canActivate: [authGuard] },
  { path: 'signin', component: SigninComponent, canActivate: [authGuard] },
  { path: 'orders', component: OrdersComponent },
];
