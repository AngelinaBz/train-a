import { CommonModule } from '@angular/common';
import {
  Component, ElementRef, NgZone, OnInit, ViewChild, Output, EventEmitter
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import { SearchCriteria } from '../services/search.service';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  private readonly mapboxToken = 'pk.eyJ1Ijoia3Zha2VyLTIwMjQiLCJhIjoiY20wNm45emx3MHBzZDJsc2RzZ2NoMjF3MSJ9.Fq0_XPvhWi9KlfBWszLIxw';
  @Output() search: EventEmitter<SearchCriteria> = new EventEmitter<SearchCriteria>();

  @ViewChild('fromCity', { static: true }) fromCity!: ElementRef;
  @ViewChild('toCity', { static: true }) toCity!: ElementRef;

  constructor(private ngZone: NgZone) {
    this.searchForm = new FormGroup({
      fromCity: new FormControl(''),
      toCity: new FormControl(''),
      time: new FormControl(''),
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

    fromGeocoder.on('result', (e: any) => {
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

    toGeocoder.on('result', (e: any) => {
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
  }

  onSubmit() {
    const formValue = this.searchForm.value;
    const searchCriteria: SearchCriteria = {
      fromLatitude: 0,
      fromLongitude: 0,
      toLatitude: 0,
      toLongitude: 0
    };
    this.search.emit(searchCriteria);
  }
}
