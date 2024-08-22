import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder, FormGroup, ReactiveFormsModule, Validators
} from '@angular/forms';

import { SearchCriteria, SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-form',
  standalone: true,
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SearchFormComponent {
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
  ) {
    this.searchForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const searchCriteria: SearchCriteria = this.searchForm.value;
      this.searchService.updateSearchCriteria(searchCriteria);
    }
  }
}
