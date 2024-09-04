import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { dateValidator, formatDate, formatTime, parseDateTime, timeValidator } from '../../../shared/validators/date-validator';
import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { DeleteRideDialogComponent } from '../../components/delete-ride-dialog/delete-ride-dialog.component';
import { RideCardComponent } from '../../components/ride-card/ride-card.component';
import { Price, RouteByID, Schedule, Segment } from '../../models/ride.model';
import { RideFacade } from '../../state/rides.facade';

@Component({
  selector: 'app-ride-management',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink,
    RideCardComponent,
    MatIconModule,
    MatCardModule,
    MatProgressSpinner,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
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
  editType: null | 'date' | 'price' = null;
  isCreatingNewRide = false;
  newRide: Schedule = { rideId: 0, segments: [] };
  priceTypes: string[] = [];

  rideForm!: FormGroup;
  pricesForm!: FormGroup;

  ride$ = this.rideFacade.ride$;
  isLoading$ = this.rideFacade.isLoading$;

  constructor(
    private rideFacade: RideFacade,
    private stationFacade: StationFacade,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dialog: MatDialog,
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
          this.priceTypes = Object.keys(this.routeById.schedule[0].segments[0]?.price || {});
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

  onCreateRide(): void {
    this.rideForm.reset();
    this.isCreatingNewRide = true;
    this.newRide = {
      rideId: 0,
      segments: this.stations.map(() => ({
        time: ['', ''],
        price: this.priceTypes.reduce((acc, type) => ({ ...acc, [type]: null }), {}),
      })),
    };
  }

  saveNewRide(): void {
    this.rideFacade.createRide(this.routeId, this.newRide.segments);
    this.isCreatingNewRide = false;
    this.newRide = { rideId: 0, segments: [] };
  }

  cancelNewRide(): void {
    this.isCreatingNewRide = false;
  }

  onEditTimes(event: { rideId: number; index: number }) {
    this.editType = 'date';
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
    this.editType = 'price';
    const { rideId, index } = event;
    const segment = this.getSegment(index, rideId);
    if (!segment) return;
    this.editedSegment = segment;

    this.editedSegmentIndex = index;
    this.editedRideId = rideId;
    this.editPrices = Object.entries(segment.price).map(([type, amount]) => ({ type, amount }));
  }

  saveTimes(rideId: number): void {
    if (!this.editedSegment || !(this.rideForm && this.rideForm.valid)) {
      return;
    }
    const updatedTime: [string, string] = [
      parseDateTime(this.rideForm.value.departureDate, this.rideForm.value.departureTime),
      parseDateTime(this.rideForm.value.arrivalDate, this.rideForm.value.arrivalTime),
    ];

    this.saveChanges(rideId, {
      ...this.editedSegment,
      time: updatedTime,
    });
  }

  savePrices(rideId: number): void {
    if (!this.editedSegment) {
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

  saveChanges(rideId: number, updatedSegment: Segment): void {
    if (!this.editedSegment) {
      return;
    }
    const segments: Segment[] = [...(this.rides.find((r) => r.rideId === rideId)?.segments || [])];

    const editedSegmentId = segments.indexOf(this.editedSegment);
    segments[editedSegmentId] = updatedSegment;

    this.rideFacade.updateRide(this.routeId, rideId, segments);
    this.cancelEditDate();
    this.cancelEditPrice();
  }

  cancelEditDate() {
    this.editedSegment = null;
    this.editType = null;
  }
  cancelEditPrice() {
    this.editedSegmentIndex = null;
    this.editType = null;
    this.editPrices = [];
  }

  getSegment(index: number, rideId: number): Segment | null {
    const rideItem = this.rides.find((ride) => ride.rideId === rideId);
    return rideItem ? rideItem.segments[index] || null : null;
  }

  isFutureRide(departureTime: string): boolean {
    return new Date(departureTime) > new Date();
  }

  openDeleteConfirmation(rideId: number) {
    const dialogRef = this.dialog.open(DeleteRideDialogComponent, {
      data: { rideId: this.editedSegmentIndex },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.rideFacade.deleteRide(this.routeId, rideId);
      }
    });
  }
}
