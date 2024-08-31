import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { Carriage } from '../../../carriages/state/carriage.model';
import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { Route } from '../../models/route.model';
import { RoutesFacade } from '../../state/routes.facade';
import { DeleteRouteComponent } from '../delete-route/delete-route.component';

@Component({
  selector: 'app-route-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, MatIcon],
  templateUrl: './route-card.component.html',
  styleUrl: './route-card.component.scss',
})
export class RouteCardComponent implements OnInit {
  @Input() route!: Route;

  stations: Station[] = [];
  carriages: Carriage[] = [];

  constructor(
    private routesFacade: RoutesFacade,
    private stationFacade: StationFacade,
    private carriageFacade: CarriageFacade,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.loadStations();
    this.loadCarriages();
  }

  loadStations() {
    this.stationFacade.stations$.subscribe((stations) => {
      this.stations = stations.filter((station) => this.route.path.includes(station.id));
    });
  }

  loadCarriages() {
    this.carriageFacade.carriages$.subscribe((carriages) => {
      this.carriages = carriages.filter((carriage) => this.route.carriages.includes(carriage.code));
    });
  }

  deleteRoute() {
    const dialogRef = this.dialog.open(DeleteRouteComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.routesFacade.deleteRoute(this.route.id);
        this.routesFacade.isDeleteSuccess$.subscribe((success) => {
          if (success) {
            this.snackBar.open('The route has been successfully deleted', 'Close', {
              duration: 3000,
            });
            this.routesFacade.loadRoutes();
          }
        });
        this.routesFacade.routesError$.subscribe((error) => {
          if (error) {
            this.snackBar.open(`Error: ${error.message}`, 'Close', {
              duration: 3000,
            });
          }
        });
      }
    });
  }
}
