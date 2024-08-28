import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SearchCriteria, SearchResult } from '../../../models/search.models';
import { SearchService } from '../../../services/search.service';

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
      next: (result: SearchResult) => {
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

  calculateDuration(startTime: string, endTime: string): string {
    if (!startTime || !endTime) return '';
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return '';

    const durationMs = end.getTime() - start.getTime();
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  }
}
