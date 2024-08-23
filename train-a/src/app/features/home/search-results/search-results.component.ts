import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SearchCriteria, SearchResult, SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SearchResultsComponent {
  searchResults: SearchResult | null = null;
  searchError: string | null = null;

  constructor(private searchService: SearchService) {}

  performSearch(criteria: SearchCriteria) {
    this.searchService.search(criteria).subscribe({
      next: (result) => {
        console.log('Search results received:', result);
        this.searchResults = result;
        this.searchError = null;
      },
      error: (err) => {
        console.error('Search error:', err);
        this.searchError = 'An error occurred while searching. Please try again.';
        this.searchResults = null;
      },
    });
  }
}
