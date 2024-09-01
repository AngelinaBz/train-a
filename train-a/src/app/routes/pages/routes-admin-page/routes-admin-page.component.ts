import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

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

  isCreatingRoute = false;

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
  }

  addCarriage() {
    this.selectedCarriages.push({ name: '' } as Carriage);
  }

  onStationChange(event: MatSelectChange, index: number) {
    this.selectedStations[index] = event.value;

    if (event.value === '' && index < this.selectedStations.length - 1) {
      this.selectedStations.splice(index + 1);
    } else if (event.value !== '' && index === this.selectedStations.length - 1) {
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

  saveRoute() {
    this.isCreatingRoute = false;
    this.selectedStations = [];
    this.selectedCarriages = [];
  }
}
