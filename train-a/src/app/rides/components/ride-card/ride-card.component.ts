import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { RouteByID, Schedule, Segment } from '../../models/ride.model';

@Component({
  selector: 'app-ride-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule, MatProgressBarModule],
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
  isLoading$ = this.stationFacade.isLoading$;

  constructor(private stationFacade: StationFacade) {}

  ngOnInit() {
    this.loadRideStations();
  }

  loadRideStations() {
    this.stationFacade.stations$.subscribe((stations) => {
      this.stations = this.routeByID.path
        .map((stationId) => stations.find((station) => station.id === stationId))
        .filter((station): station is Station => station !== undefined);
    });
  }

  loadSchedule() {
    this.rides = this.routeByID.schedule;
  }

  getDepartureTime(segment: Segment): string {
    return new Date(segment.time[0]).toLocaleString();
  }

  getArrivalTime(segment: Segment): string {
    return new Date(segment.time[1]).toLocaleString();
  }

  getPrice(segment: Segment): { type: string; amount: number }[] {
    return Object.entries(segment.price).map(([type, amount]) => ({
      type: type.charAt(0).toUpperCase() + type.slice(1),
      amount,
    }));
  }

  // onEditTimes(index: number): void {}

  // onEditPrices(index: number): void {}
}
