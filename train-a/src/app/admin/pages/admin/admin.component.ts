import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

import { CarriagesComponent } from '../../components/carriages/carriages.component';
import { StationsComponent } from '../../components/stations/stations.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, RouterLink, StationsComponent, CarriagesComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
