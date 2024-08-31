import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { Carriage } from '../../../carriages/state/carriage.model';
import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { Route } from '../../models/route.model';

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
    private stationFacade: StationFacade,
    private carriageFacade: CarriageFacade,
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
}
