import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import { environment } from '../../../../environments/environment';
import { SearchCriteria } from '../services/search.service';

interface MapboxGeocoderResult {
  place_name: string;
  geometry: {
    coordinates: [number, number];
  };
}

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  /* eslint-disable no-console */
  private readonly mapboxToken = environment.mapboxToken;
  @Output() search: EventEmitter<SearchCriteria> = new EventEmitter<SearchCriteria>();

  @ViewChild('fromCity', { static: true }) fromCity!: ElementRef;
  @ViewChild('toCity', { static: true }) toCity!: ElementRef;

  constructor(private ngZone: NgZone) {
    this.searchForm = new FormGroup({
      fromCity: new FormControl('', Validators.required),
      toCity: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl({ value: '', disabled: true }),
    });

    this.searchForm.get('date')?.valueChanges.subscribe((date) => {
      if (date) {
        this.searchForm.get('time')?.enable();
      } else {
        this.searchForm.get('time')?.disable();
        this.searchForm.get('time')?.reset();
      }
    });
  }

  ngOnInit() {
    this.initializeMapboxAutocomplete();
  }

  initializeMapboxAutocomplete() {
    const fromGeocoder = new MapboxGeocoder({
      accessToken: this.mapboxToken,
      types: 'place',
      placeholder: 'Select starting city',
    });

    fromGeocoder.addTo(this.fromCity.nativeElement);

    fromGeocoder.on('result', (e: { result: MapboxGeocoderResult }) => {
      this.ngZone.run(() => {
        const place = e.result;
        this.searchForm.patchValue({
          fromCity: place.place_name,
        });
      });
    });

    const toGeocoder = new MapboxGeocoder({
      accessToken: this.mapboxToken,
      types: 'place',
      placeholder: 'Select destination city',
    });

    toGeocoder.addTo(this.toCity.nativeElement);

    toGeocoder.on('result', (e: { result: MapboxGeocoderResult }) => {
      this.ngZone.run(() => {
        const place = e.result;
        this.searchForm.patchValue({
          toCity: place.place_name,
        });
      });
    });
  }

  swapLocations() {
    const fromCity = this.searchForm.get('fromCity')?.value;
    const toCity = this.searchForm.get('toCity')?.value;

    this.searchForm.patchValue({
      fromCity: toCity,
      toCity: fromCity,
    });

    if (this.fromCity.nativeElement) {
      this.fromCity.nativeElement.querySelector('.mapboxgl-ctrl-geocoder--input')!.value = toCity;
    }
    if (this.toCity.nativeElement) {
      this.toCity.nativeElement.querySelector('.mapboxgl-ctrl-geocoder--input')!.value = fromCity;
    }
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const searchCriteria: SearchCriteria = {
        fromLatitude: 0,
        fromLongitude: 0,
        toLatitude: 0,
        toLongitude: 0,
      };
      this.search.emit(searchCriteria);
    }
  }

  isFormValid(): boolean {
    const { fromCity, toCity, date } = this.searchForm.controls;
    return fromCity.valid && toCity.valid && date.valid;
  }
}
