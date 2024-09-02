import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { map, switchMap } from 'rxjs';

import { RouteDialogComponent } from '../../../components/route-dialog/route-dialog.component';
import { Carriage, CarriageItem, Route, SearchCriteria, SearchResult, StationInfo } from '../../../models/search.models';
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
  stations: StationInfo[] = [];
  carriages: Carriage[] = [];

  constructor(
    private searchService: SearchService,
    private dialog: MatDialog,
  ) {}

  performSearch(criteria: SearchCriteria) {
    this.loadStationsAndCarriages()
      .pipe(switchMap(() => this.searchService.search(criteria)))
      .subscribe({
        next: (result: SearchResult) => {
          console.log('Search results received:', result);
          this.searchResults = this.processSearchResult(result);
          this.searchError = null;
        },
        error: (err) => {
          console.error('Search error:', err);
          this.searchError = 'An error occurred while searching. Please try again.';
          this.searchResults = null;
        },
      });
  }

  private loadStationsAndCarriages() {
    return this.searchService.getStations().pipe(
      map((stations: StationInfo[]) => {
        this.stations = stations;
      }),
      switchMap(() =>
        this.searchService.getCarriages().pipe(
          map((carriages: Carriage[]) => {
            this.carriages = carriages;
          }),
        ),
      ),
    );
  }

  private processSearchResult(result: SearchResult): SearchResult {
    console.log('Processing search result:', result);

    const updatedRoutes = result.routes.map((route) => {
      const pathNames = route.path.map((stationId) => {
        const station = this.stations.find((s) => s.stationId === stationId);
        return station ? station.city : 'Unknown';
      });

      const carriagesInfo: CarriageItem[] = route.carriages
        .map((carriageCode) => {
          const carriage = this.carriages.find((c) => c.code === carriageCode);
          if (carriage) {
            return {
              code: carriage.code,
              name: carriage.info || 'Unknown',
              leftSeats: carriage.seatsAvailable || 0,
              rightSeats: 0,
              rows: Number.isFinite(carriage.seatsAvailable) ? Math.ceil(carriage.seatsAvailable / 4) : 0,
              mode: 'standard',
            } as CarriageItem;
          }
          return null;
        })
        .filter((carriage): carriage is CarriageItem => carriage !== null);

      return {
        ...route,
        pathNames,
        carriagesInfo,
      };
    });

    return {
      ...result,
      routes: updatedRoutes,
    };
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
  groupPricesByClass(route: Route): { [key: string]: number } {
    const prices: { [key: string]: number } = {};

    route.carriages.forEach((carriageCode: string) => {
      const carriage = route.carriagesInfo?.find((c) => c.code === carriageCode);

      if (carriage) {
        const carriagePrice = route.schedule
          .flatMap((schedule) => schedule.segments)
          .reduce((accum, segment) => {
            const price = segment.price[carriageCode];
            return price ? accum + price : accum;
          }, 0);

        if (carriagePrice > 0) {
          prices[carriageCode] = carriagePrice;
        }
      }
    });

    return prices;
  }

  calculateTotalCost(startStationId: number, endStationId: number, carriageCode: string): number {
    let totalCost = 0;

    const route = this.searchResults?.routes.find((r) => r.path.includes(startStationId) && r.path.includes(endStationId));

    if (route) {
      const startIndex = route.path.indexOf(startStationId);
      const endIndex = route.path.indexOf(endStationId);

      if (startIndex < 0 || endIndex < 0 || startIndex >= endIndex) {
        console.error('Invalid station indices');
        return 0;
      }

      for (let i = startIndex; i < endIndex; i += 1) {
        const segment = route.schedule.flatMap((schedule) => schedule.segments)[i];

        if (segment) {
          const price = segment.price[carriageCode];
          if (price) {
            totalCost += price;
          }
        }
      }
    }

    return totalCost;
  }

  countTotalSeatsByClass(route: Route): { carriage1: number; carriage2: number; carriage3: number } {
    console.log('Counting total seats by class:', route);
    const seatCounts = { carriage1: 0, carriage2: 0, carriage3: 0 };
    route.carriages.forEach((carriageCode: string) => {
      const carriage = this.carriages.find((c) => c.code === carriageCode);
      if (carriage) {
        if (carriage.code === 'carriage1') seatCounts.carriage1 += carriage.seatsAvailable;
        if (carriage.code === 'carriage2') seatCounts.carriage2 += carriage.seatsAvailable;
        if (carriage.code === 'carriage3') seatCounts.carriage3 += carriage.seatsAvailable;
      }
    });
    return seatCounts;
  }

  openRouteDialog(route: Route): void {
    const preparedData = this.prepareRouteData(route);
    console.log('Prepared Data:', preparedData);

    this.dialog.open(RouteDialogComponent, {
      width: '600px',
      data: preparedData,
    });
  }

  private prepareRouteData(route: Route) {
    const getCityNameById = (id: number): string => {
      return this.stations.find((station) => station.stationId === id)?.city || 'Unknown';
    };

    const scheduleData = route.schedule.flatMap((schedule) => {
      if (!schedule.segments) return [];

      let previousDepartureTime: string | null = null;

      return schedule.segments.map((segment) => {
        const departureTime = segment.time ? segment.time[0] : 'Unknown';
        const arrivalTime = segment.time ? segment.time[1] : 'Unknown';
        const interval = previousDepartureTime ? this.calculateInterval(previousDepartureTime, departureTime) : 'N/A';

        previousDepartureTime = departureTime;

        return {
          departureTime,
          arrivalTime,
          stationName: getCityNameById(route.path[route.schedule.indexOf(schedule)] || 0),
          interval,
        };
      });
    });

    const firstStationId = route.path?.[0] || 0;
    const lastStationId = route.path?.[route.path.length - 1] || 0;

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

  getCarriageInfo(carriageCode: string): string {
    const carriage = this.carriages.find((c) => c.code === carriageCode);
    return carriage ? carriage.info : 'Unknown';
  }
}
