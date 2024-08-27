import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SearchCriteria, SearchResult, Segment } from '../../../models/search.models';
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

  calculateDuration(segments: Segment[]): string {
    if (segments.length === 0) return '';

    const startTime = new Date(segments[0].time[0]);
    const endTime = new Date(segments[segments.length - 1].time[1]);

    const durationMs = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  }
}
