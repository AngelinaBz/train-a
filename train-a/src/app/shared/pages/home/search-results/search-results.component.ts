import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { RouteDialogComponent } from '../../../components/route-dialog/route-dialog.component';
import { Route, SearchCriteria, SearchResult } from '../../../models/search.models';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule],
})
export class SearchResultsComponent {
  searchResults: SearchResult | null = null;
  searchError: string | null = null;

  constructor(
    private searchService: SearchService,
    private dialog: MatDialog,
  ) {}

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

  groupPricesByClass(route: Route): { carriage1: number; carriage2: number; carriage3: number } {
    const aggregatedPrices = { carriage1: 0, carriage2: 0, carriage3: 0 };
    const count = { carriage1: 0, carriage2: 0, carriage3: 0 };

    route.schedule.forEach((schedule) => {
      schedule.segments.forEach((segment) => {
        if (segment.price) {
          Object.keys(segment.price).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(aggregatedPrices, key)) {
              aggregatedPrices[key as keyof typeof aggregatedPrices] += segment.price[key];
              count[key as keyof typeof count] += 1;
            }
          });
        }
      });
    });

    Object.keys(aggregatedPrices).forEach((key) => {
      if (count[key as keyof typeof count] > 0) {
        aggregatedPrices[key as keyof typeof aggregatedPrices] = Math.round(
          aggregatedPrices[key as keyof typeof aggregatedPrices] / count[key as keyof typeof count],
        );
      }
    });

    return aggregatedPrices;
  }

  countTotalSeatsByClass(route: Route): { carriage1: number; carriage2: number; carriage3: number } {
    const seatCounts = { carriage1: 0, carriage2: 0, carriage3: 0 };

    const seatsPerCarriage = 29;

    route.carriages.forEach((carriageType) => {
      if (carriageType === 'carriage1') {
        seatCounts.carriage1 += seatsPerCarriage;
      } else if (carriageType === 'carriage2') {
        seatCounts.carriage2 += seatsPerCarriage;
      } else if (carriageType === 'carriage3') {
        seatCounts.carriage3 += seatsPerCarriage;
      }
    });

    return seatCounts;
  }

  openRouteDialog(route: Route): void {
    const preparedData = this.prepareRouteData(route);

    this.dialog.open(RouteDialogComponent, {
      width: '600px',
      data: preparedData,
    });
  }

  private prepareRouteData(route: Route) {
    const getCityNameById = (id: number): string => {
      return `City ${id}`;
    };

    const scheduleData = route.schedule.flatMap((schedule) => {
      let previousDepartureTime: string | null = null;

      return schedule.segments.map((segment) => {
        const departureTime = segment.time[0];
        const arrivalTime = segment.time[1];
        const interval = previousDepartureTime ? this.calculateInterval(previousDepartureTime, departureTime) : 'N/A';

        previousDepartureTime = departureTime;

        return {
          departureTime,
          arrivalTime,
          stationName: getCityNameById(route.path[schedule.segments.indexOf(segment)]) || 'Unknown',
          interval,
        };
      });
    });

    const firstStationId = route.path[0] || 0;
    const lastStationId = route.path[route.path.length - 1] || 0;

    return {
      routeId: route.id,
      firstStation: getCityNameById(firstStationId),
      lastStation: getCityNameById(lastStationId),
      schedule: scheduleData,
    };
  }

  private calculateInterval(startTime: string, endTime: string): string {
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 'N/A';

    const durationMs = end.getTime() - start.getTime();
    const minutes = Math.floor(durationMs / (1000 * 60));
    return `${minutes} min`;
  }
}
