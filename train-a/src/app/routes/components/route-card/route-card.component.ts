import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() editRoute = new EventEmitter<Route>();

  stations: Station[] = [];
  carriages: Carriage[] = [];
  routeId?: number;

  constructor(
    private routesFacade: RoutesFacade,
    private stationFacade: StationFacade,
    private carriageFacade: CarriageFacade,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    if (this.route) {
      this.routeId = this.route.id;
      this.loadStations();
      this.loadCarriages();
    }
  }

  loadStations() {
    this.stationFacade.stations$.subscribe((stations) => {
      this.stations = this.route.path
        .map((stationId) => stations.find((station) => station.id === stationId))
        .filter((station) => station !== undefined) as Station[];
    });
  }

  loadCarriages() {
    this.carriageFacade.carriages$.subscribe((carriages) => {
      this.carriages = this.route.carriages
        .map((carriageCode) => carriages.find((carriage) => carriage.code === carriageCode))
        .filter((carriage) => carriage !== undefined) as Carriage[];
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

  editRouteEvent() {
    this.editRoute.emit(this.route);
  }
}
