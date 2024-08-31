import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { StationFacade } from '../../../stations/state/station.facade';
import { RouteCardComponent } from '../../components/route-card/route-card.component';
import { RoutesFacade } from '../../state/routes.facade';

@Component({
  selector: 'app-routes-admin-page',
  standalone: true,
  imports: [RouteCardComponent, CommonModule, MatProgressSpinner],
  templateUrl: './routes-admin-page.component.html',
  styleUrl: './routes-admin-page.component.scss',
})
export class RoutesAdminPageComponent implements OnInit {
  routes$ = this.routesFacade.routes$;
  isLoading$ = this.routesFacade.isLoading$;

  constructor(
    private routesFacade: RoutesFacade,
    private stationFacade: StationFacade,
    private carriageFacade: CarriageFacade,
  ) {}

  ngOnInit() {
    this.routesFacade.loadRoutes();
    this.routes$.subscribe((routes) => {
      if (routes) {
        console.log(routes);
      }
    });
    this.carriageFacade.loadCarriages();
    this.stationFacade.loadStations();
  }
}
