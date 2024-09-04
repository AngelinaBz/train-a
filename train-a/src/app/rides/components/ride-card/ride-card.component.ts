import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { formatDate, formatTime } from '../../../shared/validators/date-validator';
import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { RouteByID, Schedule, Segment } from '../../models/ride.model';
import { RideFacade } from '../../state/rides.facade';

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
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './ride-card.component.html',
  styleUrl: './ride-card.component.scss',
})
export class RideCardComponent {
  @Input() routeById!: RouteByID;
  @Input() rides!: Schedule[];
  @Input() stations!: Station[];
  @Input() editedSegment!: Segment | null;
  @Input() editedSegmentIndex!: number | null;
  @Input() editedRideId!: number | null;
  @Input() rideForm!: FormGroup;
  @Input() editType: null | 'date' | 'price' = null;
  @Input() editPrices!: { type: string; amount: number }[];

  @Output() editTimesEvent = new EventEmitter<{ index: number; rideId: number }>();
  @Output() editPricesEvent = new EventEmitter<{ index: number; rideId: number }>();
  @Output() saveTimes = new EventEmitter<number>();
  @Output() savePrices = new EventEmitter<number>();
  @Output() cancelEditDate = new EventEmitter<void>();
  @Output() cancelEditPrice = new EventEmitter<void>();
  @Output() openDeleteConfirmation = new EventEmitter<number>();

  isLoading$ = this.stationFacade.isLoading$;
  route$ = this.rideFacade.ride$;

  constructor(
    private stationFacade: StationFacade,
    private rideFacade: RideFacade,
  ) {}

  onEditTimes(index: number, rideId: number): void {
    this.editTimesEvent.emit({ index, rideId });
  }

  onEditPrices(index: number, rideId: number): void {
    this.editPricesEvent.emit({ index, rideId });
  }

  cancelEditingDate(): void {
    this.cancelEditDate.emit();
  }

  cancelEditingPrice(): void {
    this.cancelEditPrice.emit();
  }

  deleteConfirmation(rideId: number): void {
    this.openDeleteConfirmation.emit(rideId);
  }

  isFutureRide(time: string): boolean {
    return new Date(time) > new Date();
  }

  getDate(dateStr: string): string {
    return `${formatDate(dateStr)} ${formatTime(dateStr)}`;
  }

  getPrice(segment: Segment): { type: string; amount: number }[] {
    return Object.entries(segment.price).map(([type, amount]) => ({
      type: type.charAt(0).toUpperCase() + type.slice(1),
      amount,
    }));
  }
}
