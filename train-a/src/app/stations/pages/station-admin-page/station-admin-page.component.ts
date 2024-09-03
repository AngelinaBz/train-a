import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Subject, takeUntil } from 'rxjs';

import { MapService } from '../../../shared/services/map/map.service';
import { cityNameValidator, latitudeValidator, longitudeValidator } from '../../../shared/validators/station-validation';
import { MapComponent } from '../../components/map/map.component';
import { StationCardComponent } from '../../components/station-card/station-card.component';
import { Station, StationWithoutId } from '../../models/station.model';
import { StationFacade } from '../../state/station.facade';

@Component({
  selector: 'app-stations',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MapComponent,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    StationCardComponent,
    MatListModule,
    MatDividerModule,
    MatProgressSpinner,
  ],
  templateUrl: './station-admin-page.component.html',
  styleUrl: './station-admin-page.component.scss',
})
export class StationAdminPageComponent implements OnInit, OnDestroy {
  stationForm!: FormGroup;
  errorMessage!: string | null;
  successMessage!: string | null;
  isLoading$ = this.stationFacade.isLoading$;
  allStations$ = this.stationFacade.stations$;
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private mapService: MapService,
    private stationFacade: StationFacade,
  ) {}

  ngOnInit(): void {
    this.stationForm = this.fb.group({
      cityName: ['', cityNameValidator],
      latitude: ['', latitudeValidator],
      longitude: ['', longitudeValidator],
      connections: this.fb.array([this.createConnection()]),
    });
    this.stationFacade.loadStations();

    this.mapService.markerClick$.pipe(takeUntil(this.destroy$)).subscribe((marker) => {
      if (marker) {
        this.updateFormWithMarkerData(marker);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get connections(): FormArray {
    return this.stationForm.get('connections') as FormArray;
  }

  createConnection(): FormGroup {
    return this.fb.group({
      stationName: [null, cityNameValidator],
    });
  }

  updateFormWithMarkerData(marker: { lat: number; lng: number; city?: string }): void {
    this.stationForm.patchValue({
      latitude: marker.lat,
      longitude: marker.lng,
      cityName: marker.city || 'City',
    });
  }

  onConnectionSelect(index: number): void {
    this.errorMessage = null;
    const selectedStation = this.connections.at(index).get('stationName')?.value;
    if (selectedStation) {
      this.mapService.addMarker(selectedStation.latitude, selectedStation.longitude, selectedStation.city);
    }
    if (index === this.connections.length - 1) {
      this.connections.push(this.createConnection());
    }
  }

  removeConnection(index: number): void {
    if (this.connections.length > 1) {
      this.connections.removeAt(index);
    }
  }

  resetForm(): void {
    setTimeout(() => {
      this.stationForm.reset();
      this.successMessage = null;
      this.errorMessage = null;
      while (this.connections.length > 1) {
        this.connections.removeAt(1);
      }
    }, 3000);
  }

  saveConnection(): void {
    if (this.stationForm.valid) {
      const selectedCities = this.stationForm.value.connections.map(
        (connection: { stationName: Station }) => connection.stationName,
      );
      const selectedCitiesIds = selectedCities.map((conn: Station) => conn.city);
      const hasDuplicates = selectedCitiesIds.some((city: string, index: number) => selectedCitiesIds.indexOf(city) !== index);

      if (hasDuplicates) {
        this.errorMessage = 'The same city cannot be selected twice.';
        return;
      }

      const stationData: StationWithoutId = {
        city: this.stationForm.value.cityName,
        latitude: this.stationForm.value.latitude,
        longitude: this.stationForm.value.longitude,
        relations: this.stationForm.value.connections.map((conn: { stationName: Station }) => conn.stationName.id),
        connectedTo: selectedCities,
      };

      this.stationFacade.createStation(stationData);

      this.successMessage = 'Station connection successfully created';
      this.resetForm();
    }
  }
}
