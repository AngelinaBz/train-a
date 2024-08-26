import { Routes } from '@angular/router';

import { CarriagesComponent } from './admin/components/carriages/carriages.component';
import { StationsComponent } from './admin/components/stations/stations.component';
import { AdminComponent } from './admin/pages/admin/admin.component';
import { SignupComponent } from './auth/pages/signup/signup.component';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
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
  { path: '**', redirectTo: 'signup' },
];
