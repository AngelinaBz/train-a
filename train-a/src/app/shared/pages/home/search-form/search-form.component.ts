import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { SearchCriteria, StationInfo } from '../../../models/search.models';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  fromCityOptions: StationInfo[] = [];
  toCityOptions: StationInfo[] = [];
  filteredFromCities: Observable<StationInfo[]> = new Observable<StationInfo[]>();
  filteredToCities: Observable<StationInfo[]> = new Observable<StationInfo[]>();
  today: Date = new Date();

  @Output() search = new EventEmitter<SearchCriteria>();

  constructor(private stationService: SearchService) {
    this.searchForm = new FormGroup({
      fromCity: new FormControl('', Validators.required),
      toCity: new FormControl('', Validators.required),
      date: new FormControl(this.today, Validators.required),
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
    this.loadStations();
  }

  loadStations(): void {
    this.stationService.getStations().subscribe((stations) => {
      this.fromCityOptions = stations;
      this.toCityOptions = stations;
      this.filteredFromCities = this.searchForm.get('fromCity')!.valueChanges.pipe(
        startWith(''),
        map((value) => this.filterCities(value, this.fromCityOptions)),
      );
      this.filteredToCities = this.searchForm.get('toCity')!.valueChanges.pipe(
        startWith(''),
        map((value) => this.filterCities(value, this.toCityOptions)),
      );
    });
  }

  filterCities(value: string, options: StationInfo[]): StationInfo[] {
    const filterValue = value.toLowerCase();
    return options.filter((option) => option.city.toLowerCase().includes(filterValue));
  }

  swapLocations() {
    const fromCityControl = this.searchForm.get('fromCity');
    const toCityControl = this.searchForm.get('toCity');

    if (fromCityControl && toCityControl) {
      const fromCity = fromCityControl.value;
      fromCityControl.setValue(toCityControl.value);
      toCityControl.setValue(fromCity);
    }
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const { fromCity, toCity, date, time } = this.searchForm.value;
      const fromStation = this.fromCityOptions.find((station) => station.city === fromCity);
      const toStation = this.toCityOptions.find((station) => station.city === toCity);

      const searchCriteria: SearchCriteria = {
        fromCity,
        toCity,
        fromLatitude: fromStation?.latitude || 0,
        fromLongitude: fromStation?.longitude || 0,
        toLatitude: toStation?.latitude || 0,
        toLongitude: toStation?.longitude || 0,
        date,
        time,
      };

      this.search.emit(searchCriteria);
    }
  }

  isFormValid(): boolean {
    const { fromCity, toCity, date } = this.searchForm.controls;
    return fromCity.valid && toCity.valid && date.valid;
  }
}
