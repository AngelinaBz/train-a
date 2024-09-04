import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { SearchResultsComponent } from '../../components/search-results/search-results.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, SearchFormComponent, SearchResultsComponent],
})
export class HomeComponent {}
