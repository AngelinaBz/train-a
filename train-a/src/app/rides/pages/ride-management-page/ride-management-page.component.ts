import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { RideCardComponent } from '../../components/ride-card/ride-card.component';
import { RouteByID, Schedule } from '../../models/ride.model';
import { RideFacade } from '../../state/rides.facade';

@Component({
  selector: 'app-ride-management',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink, RideCardComponent, MatIconModule, MatCardModule, MatProgressSpinner],
  templateUrl: './ride-management-page.component.html',
  styleUrl: './ride-management-page.component.scss',
})
export class RideManagementPageComponent implements OnInit {
  routeId!: number;
  stationsId!: number[];
  carriages: string[] = [];
  rides: Schedule[] = [];
  stations: Station[] = [];

  route$ = this.rideFacade.ride$;
  isLoading$ = this.rideFacade.isLoading$;

  constructor(
    private rideFacade: RideFacade,
    private stationFacade: StationFacade,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.stationFacade.loadStations();
    this.route.params.subscribe((params) => {
      this.routeId = params['id'];
      this.rideFacade.loadRouteById(this.routeId);
    });
  }

  onCreateRide(): void {
    console.log('create ride');
  }

  onUpdateRide(updatedRide: RouteByID): void {
    console.log('updated ride', updatedRide);
  }
}
