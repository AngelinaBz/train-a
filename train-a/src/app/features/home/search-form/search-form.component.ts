import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder, FormGroup, ReactiveFormsModule, Validators
} from '@angular/forms';

import { SearchCriteria } from '../services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class SearchFormComponent {
  @Output() searchSubmitted = new EventEmitter<SearchCriteria>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      fromLatitude: [null, Validators.required],
      fromLongitude: [null, Validators.required],
      toLatitude: [null, Validators.required],
      toLongitude: [null, Validators.required],
      time: [null]
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const searchCriteria = this.searchForm.value as SearchCriteria;
      this.searchSubmitted.emit(searchCriteria);
    }
  }
}
