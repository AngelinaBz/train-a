import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { RouteByID, Schedule } from '../../models/ride.model';
import { RideFacade } from '../../state/rides.facade';

@Component({
  selector: 'app-ride-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule],
  templateUrl: './ride-card.component.html',
  styleUrl: './ride-card.component.scss',
})
export class RideCardComponent implements OnInit {
  @Input() routeByID!: RouteByID;
  @Output() updateRide = new EventEmitter<RouteByID>();

  rideId!: number;
  stations: Station[] = [];
  carriages: string[] = [];
  rides: Schedule[] = [];

  constructor(
    private stationFacade: StationFacade,
    private rideFacade: RideFacade,
  ) {}

  ngOnInit() {
    this.stationFacade.loadStations();
    if (this.routeByID) {
      this.loadStations();
    }
  }

  loadStations() {
    this.stationFacade.stations$.subscribe((stations) => {
      this.stations = this.routeByID.path
        .map((stationId) => stations.find((station) => station.id === stationId))
        .filter((station): station is Station => station !== undefined);
    });
  }

  loadSchedule() {
    this.rides = this.routeByID.schedule;
  }

  // onEditTimes(index: number): void {}

  // onEditPrices(index: number): void {}
}
