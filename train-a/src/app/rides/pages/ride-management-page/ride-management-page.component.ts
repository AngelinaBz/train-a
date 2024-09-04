import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { dateValidator, formatDate, formatTime, timeValidator } from '../../../shared/validators/date-validator';
import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { RideCardComponent } from '../../components/ride-card/ride-card.component';
import { Price, RouteByID, Schedule, Segment } from '../../models/ride.model';
import { RideFacade } from '../../state/rides.facade';

@Component({
  selector: 'app-ride-management',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink, RideCardComponent, MatIconModule, MatCardModule, MatProgressSpinner],
  templateUrl: './ride-management-page.component.html',
  styleUrl: './ride-management-page.component.scss',
})
export class RideManagementPageComponent implements OnInit {
  routeById!: RouteByID | null;
  routeId!: number;
  stations: Station[] = [];
  rides: Schedule[] = [];
  editedSegment: Segment | null = null;
  editedSegmentIndex: number | null = null;
  editedRideId: number | null = null;
  editPrices: { type: string; amount: number }[] = [];

  rideForm!: FormGroup;
  pricesForm!: FormGroup;

  route$ = this.rideFacade.ride$;
  isLoading$ = this.rideFacade.isLoading$;

  constructor(
    private rideFacade: RideFacade,
    private stationFacade: StationFacade,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.stationFacade.loadStations();
    this.route.params.subscribe((params) => {
      this.routeId = params['id'];
      this.rideFacade.loadRouteById(this.routeId);
      this.rideFacade.ride$.subscribe((routeById) => {
        if (routeById) {
          this.routeById = routeById;
          this.rides = routeById.schedule;
          this.loadStations();
        }
      });
    });
    this.initializeForms();
  }

  loadStations(): void {
    this.stationFacade.stations$.subscribe((stations) => {
      if (!this.routeById) return;
      this.stations = this.routeById.path
        .map((stationId) => stations.find((station) => station.id === stationId))
        .filter((station): station is Station => station !== undefined);
    });
  }

  initializeForms(): void {
    this.rideForm = this.fb.group({
      departureDate: ['', [Validators.required, dateValidator]],
      departureTime: ['', [Validators.required, timeValidator]],
      arrivalDate: ['', [Validators.required, dateValidator]],
      arrivalTime: ['', [Validators.required, timeValidator]],
    });
    this.pricesForm = this.fb.group({
      amount: ['', Validators.required],
    });
  }

  onEditTimes(event: { rideId: number; index: number }) {
    const { rideId, index } = event;
    const segment = this.getSegment(index, rideId);
    if (!segment) return;
    this.editedSegment = segment;

    if (this.rideForm) {
      this.rideForm.patchValue({
        departureDate: formatDate(segment.time[0]),
        departureTime: formatTime(segment.time[0]),
        arrivalDate: formatDate(segment.time[1]),
        arrivalTime: formatTime(segment.time[1]),
      });
    }
  }

  onEditPrices(event: { rideId: number; index: number }) {
    const { rideId, index } = event;
    const segment = this.getSegment(index, rideId);
    if (!segment) return;
    this.editedSegment = segment;

    this.editedSegmentIndex = index;
    this.editedRideId = rideId;
    this.editPrices = Object.entries(segment.price).map(([type, amount]) => ({ type, amount }));
  }

  saveChanges(rideId: number, updatedSegment: Segment): void {
    // const updatedSegment = this.collectPrices();
    const segments: Segment[] = [...(this.rides.find((r) => r.rideId === rideId)?.segments || [])];

    if (this.editedSegmentIndex !== null) {
      segments[this.editedSegmentIndex] = updatedSegment;
    }

    this.rideFacade.updateRide(this.routeId, rideId, segments);
    this.cancelEditDate();
    this.cancelEditPrice();
  }

  // saveTimes(rideId: number): void {}

  savePrices(rideId: number): void {
    if (!this.editedSegment || !this.editedSegment.price) {
      return;
    }
    const updatedPrices = this.editPrices.reduce((acc, price) => {
      acc[price.type] = price.amount;
      return acc;
    }, {} as Price);

    this.saveChanges(rideId, {
      ...this.editedSegment,
      price: updatedPrices,
    });
  }

  // collectPrices(): Segment {
  // return {
  //   time: [
  //     this.parseDateTime(this.rideForm.get('departureDate')?.value, this.rideForm.get('departureTime')?.value),
  //     this.parseDateTime(this.rideForm.get('arrivalDate')?.value, this.rideForm.get('arrivalTime')?.value)
  //   ],
  //   price: updatedPrices
  // };
  // }

  cancelEditDate() {
    this.editedSegment = null;
  }
  cancelEditPrice() {
    this.editedSegmentIndex = null;
    this.editPrices = [];
  }

  getSegment(index: number, rideId: number): Segment | null {
    const rideItem = this.rides.find((ride) => ride.rideId === rideId);
    return rideItem ? rideItem.segments[index] || null : null;
  }

  parseDateTime(date: string, time: string): string {
    const [day, month, year] = date.split('.');
    const [hours, minutes] = time.split(':');
    const parsedDate = new Date(Date.UTC(+year, +month - 1, +day, +hours, +minutes));
    return parsedDate.toISOString();
  }

  onCreateRide(): void {
    console.log('create ride');
  }
}
