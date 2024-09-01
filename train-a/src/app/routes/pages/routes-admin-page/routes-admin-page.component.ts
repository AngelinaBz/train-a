import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { Carriage } from '../../../carriages/state/carriage.model';
import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { RouteCardComponent } from '../../components/route-card/route-card.component';
import { RoutesFacade } from '../../state/routes.facade';

@Component({
  selector: 'app-routes-admin-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormField,
    RouteCardComponent,
    CommonModule,
    MatProgressSpinner,
  ],
  templateUrl: './routes-admin-page.component.html',
  styleUrls: ['./routes-admin-page.component.scss'],
})
export class RoutesAdminPageComponent implements OnInit {
  routes$ = this.routesFacade.routes$;
  isLoading$ = this.routesFacade.isLoading$;

  stations: Station[] = [];
  carriages: Carriage[] = [];

  selectedStations: Station[] = [];
  selectedCarriages: Carriage[] = [];
  connectedStations: Station[][] = [];

  isCreatingRoute = false;

  constructor(
    private routesFacade: RoutesFacade,
    private stationFacade: StationFacade,
    private carriageFacade: CarriageFacade,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.routesFacade.loadRoutes();
    this.routes$.subscribe((routes) => {
      if (routes) {
        console.log(routes);
      }
    });
    this.loadStations();
    this.loadCarriages();
  }

  loadStations() {
    this.stationFacade.loadStations();
    this.stationFacade.stations$.subscribe((stations) => {
      this.stations = stations;
    });
  }

  loadCarriages() {
    this.carriageFacade.loadCarriages();
    this.carriageFacade.carriages$.subscribe((carriages) => {
      this.carriages = carriages;
    });
  }

  showCreateRouteForm() {
    this.isCreatingRoute = true;
    this.addStation();
    this.addCarriage();
  }

  addStation() {
    this.selectedStations.push({ city: '' } as Station);
    this.updateConnectedStations();
  }

  updateConnectedStations() {
    this.connectedStations = this.selectedStations.map((station, index) => {
      if (index === 0) {
        return this.stations;
      }

      const prevStation = this.selectedStations[index - 1];
      if (prevStation && prevStation.connectedTo) {
        return prevStation.connectedTo
          .map((ct) => this.stations.find((s) => s.id === ct.id))
          .filter((s): s is Station => s !== undefined)
          .filter((s) => !this.selectedStations.slice(0, index).some((selected) => selected.id === s.id));
      }

      return [];
    });
  }

  addCarriage() {
    this.selectedCarriages.push({ name: '' } as Carriage);
  }

  getConnectesStations(index: number): Station[] {
    return this.connectedStations[index] || [];
  }

  onStationChange(event: MatSelectChange, index: number) {
    this.selectedStations[index] = event.value;
    this.selectedStations = this.selectedStations.slice(0, index + 1);

    this.updateConnectedStations();

    if (index === this.selectedStations.length - 1 && event.value) {
      this.addStation();
    }
  }

  onCarriageChange(event: MatSelectChange, index: number) {
    this.selectedCarriages[index] = event.value;

    if (event.value === '' && index < this.selectedCarriages.length - 1) {
      this.selectedCarriages.splice(index + 1);
    } else if (event.value !== '' && index === this.selectedCarriages.length - 1) {
      this.addCarriage();
    }
  }

  isValidForm() {
    return (
      this.selectedStations.filter((s) => s && s.city).length >= 3 &&
      this.selectedCarriages.filter((c) => c && c.name).length >= 3
    );
  }

  resetForm() {
    this.isCreatingRoute = false;
    this.selectedStations = [];
    this.connectedStations = [];
    this.selectedCarriages = [];
  }

  saveRoute() {
    const path = this.selectedStations.map((station) => station.id).filter((id) => id !== undefined);
    const carriages = this.selectedCarriages.map((carriage) => carriage.code).filter((code) => code !== undefined);
    this.routesFacade.createRoute(path, carriages);
    this.resetForm();
  }
}
