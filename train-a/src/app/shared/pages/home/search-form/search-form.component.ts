import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { environment } from '../../../../../environments/environment';
import { SearchCriteria } from '../../../models/search.models';

interface StationSuggestion {
  title: string;
  code: string;
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
  private readonly yaToken = environment.yaToken;
  @Output() search: EventEmitter<SearchCriteria> = new EventEmitter<SearchCriteria>();

  @ViewChild('fromCity', { static: true }) fromCity!: ElementRef;
  @ViewChild('toCity', { static: true }) toCity!: ElementRef;

  private fromCode: string = '';
  private toCode: string = '';

  constructor(
    private ngZone: NgZone,
    private http: HttpClient,
  ) {
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
    this.initializeYaAutocomplete();
  }

  initializeYaAutocomplete() {
    this.initializeStationAutocomplete(this.fromCity.nativeElement, 'fromCity', (code) => {
      this.fromCode = code;
    });
    this.initializeStationAutocomplete(this.toCity.nativeElement, 'toCity', (code) => {
      this.toCode = code;
    });
  }

  initializeStationAutocomplete(element: HTMLElement, controlName: string, setCodeCallback: (code: string) => void) {
    element.addEventListener('input', (event: Event) => {
      const query = (event.target as HTMLInputElement).value;
      console.log('Query:', query);
      if (query.length > 2) {
        this.http
          .get<{
            suggestions: StationSuggestion[];
          }>(
            `https://api.rasp.yandex.net/v3.0/suggest/?apikey=${this.yaToken}&lang=ru_RU&format=json&query=${encodeURIComponent(query)}`,
          )
          .subscribe({
            next: (response) => {
              console.log('Response:', response);
              if (response.suggestions && response.suggestions.length > 0) {
                const suggestion = response.suggestions[0];
                const codeWithPrefix =
                  suggestion.code.startsWith('s') || suggestion.code.startsWith('c') ? suggestion.code : `c${suggestion.code}`;
                setCodeCallback(codeWithPrefix);
                this.searchForm.patchValue({ [controlName]: suggestion.title });
              } else {
                setCodeCallback('');
                this.searchForm.patchValue({ [controlName]: '' });
              }
            },
            error: (error) => {
              console.error('Error fetching suggestions:', error);
            },
          });
      }
    });
  }

  swapLocations() {
    const fromCity = this.searchForm.get('fromCity')?.value;
    const toCity = this.searchForm.get('toCity')?.value;

    this.searchForm.patchValue({
      fromCity: toCity,
      toCity: fromCity,
    });

    [this.fromCode, this.toCode] = [this.toCode, this.fromCode];

    if (this.fromCity.nativeElement) {
      this.fromCity.nativeElement.querySelector('input')!.value = toCity;
    }
    if (this.toCity.nativeElement) {
      this.toCity.nativeElement.querySelector('input')!.value = fromCity;
    }
  }

  onSubmit() {
    console.log('From Code:', this.fromCode);
    console.log('To Code:', this.toCode);
    console.log('Date:', this.searchForm.get('date')?.value);
    console.log('Time:', this.searchForm.get('time')?.value);

    if (this.searchForm.valid) {
      const searchCriteria: SearchCriteria = {
        fromCode: this.fromCode,
        toCode: this.toCode,
        date: this.searchForm.get('date')?.value,
        time: this.searchForm.get('time')?.value,
      };

      console.log('Submitting search criteria:', searchCriteria);

      this.search.emit(searchCriteria);
    }
  }

  isFormValid(): boolean {
    const { fromCity, toCity, date } = this.searchForm.controls;
    return fromCity.valid && toCity.valid && date.valid;
  }
}
