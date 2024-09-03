import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { RouteByID, Schedule, Segment } from '../../models/ride.model';

@Component({
  selector: 'app-ride-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './ride-card.component.html',
  styleUrl: './ride-card.component.scss',
})
export class RideCardComponent implements OnInit {
  @Input() routeByID!: RouteByID;
  @Output() createRide = new EventEmitter<RouteByID>();

  rideId!: number;
  stations: Station[] = [];
  carriages: string[] = [];
  rides: Schedule[] = [];
  isEditing: boolean[] = [];
  editDepartureDate = '';
  editDepartureTime = '';
  editArrivalDate = '';
  editArrivalTime = '';
  editedSegment: Segment | null = null;

  departureDateValid = true;
  departureTimeValid = true;
  arrivalDateValid = true;
  arrivalTimeValid = true;
  isLoading$ = this.stationFacade.isLoading$;

  constructor(private stationFacade: StationFacade) {}

  ngOnInit() {
    this.loadRideStations();
    this.rides = this.routeByID.schedule;
  }

  loadRideStations() {
    this.stationFacade.stations$.subscribe((stations) => {
      this.stations = this.routeByID.path
        .map((stationId) => stations.find((station) => station.id === stationId))
        .filter((station): station is Station => station !== undefined);
    });
  }

  onEditTimes(index: number, rideId: number): void {
    const editableRide = this.rides.find((ride) => ride.rideId === rideId);
    if (!editableRide) {
      return;
    }
    const segment = editableRide.segments[index];
    this.editedSegment = segment;
    this.editDepartureDate = this.formatDate(segment.time[0]);
    this.editDepartureTime = this.formatTime(segment.time[0]);
    this.editArrivalDate = this.formatDate(segment.time[1]);
    this.editArrivalTime = this.formatTime(segment.time[1]);
  }

  saveChanges(index: number, rideId: number): void {
    if (this.validateDateTime()) {
      const segment = this.rides[rideId - 1].segments[index];
      segment.time[0] = this.parseDateTime(this.editDepartureDate, this.editDepartureTime);
      segment.time[1] = this.parseDateTime(this.editArrivalDate, this.editArrivalTime);
      this.editedSegment = null;
      console.log('segment', segment);
    }
  }

  cancelEdit(): void {
    this.editedSegment = null;
  }

  validateDateTime(): boolean {
    this.departureDateValid = this.isValidDate(this.editDepartureDate);
    this.departureTimeValid = this.isValidTime(this.editDepartureTime);
    this.arrivalDateValid = this.isValidDate(this.editArrivalDate);
    this.arrivalTimeValid = this.isValidTime(this.editArrivalTime);
    return this.departureDateValid && this.departureTimeValid && this.arrivalDateValid && this.arrivalTimeValid;
  }

  onDateChange(type: 'departure' | 'arrival', value: string): void {
    if (type === 'departure') {
      this.departureDateValid = this.isValidDate(value);
    } else {
      this.arrivalDateValid = this.isValidDate(value);
    }
  }

  onTimeChange(type: 'departure' | 'arrival', value: string): void {
    if (type === 'departure') {
      this.departureTimeValid = this.isValidTime(value);
    } else {
      this.arrivalTimeValid = this.isValidTime(value);
    }
  }

  isValidDate(date: string): boolean {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    return regex.test(date);
  }

  isValidTime(time: string): boolean {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(time);
  }

  formatDate(dateTime: string): string {
    const date = new Date(dateTime);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  formatTime(dateTime: string): string {
    const date = new Date(dateTime);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  parseDateTime(date: string, time: string): string {
    const [day, month, year] = date.split('.');
    const [hours, minutes] = time.split(':');
    const parsedDate = new Date(Date.UTC(+year, +month - 1, +day, +hours, +minutes));
    return parsedDate.toISOString();
  }

  getTime(segment: Segment): string {
    const date = new Date(segment.time[0]);
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  getPrice(segment: Segment): { type: string; amount: number }[] {
    return Object.entries(segment.price).map(([type, amount]) => ({
      type: type.charAt(0).toUpperCase() + type.slice(1),
      amount,
    }));
  }

  onEditPrices(index: number): void {
    console.log('edit prices', index);
  }
}
