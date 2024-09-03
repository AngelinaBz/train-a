import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { Carriage } from '../../../carriages/state/carriage.model';
import { CarriageItem, Route, SearchCriteria, SearchResult, StationInfo } from '../../../shared/models/search.models';
import * as SearchActions from '../../state/search/search.actions';
import * as SearchSelectors from '../../state/search/search.selectors';
import { RouteDetailsModalComponent } from '../route-details-modal/route-details-modal.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, ReactiveFormsModule],
})
export class SearchResultsComponent implements OnInit {
  searchResults$: Observable<SearchResult | null>;
  searchError$: Observable<string | null>;
  stations$: Observable<StationInfo[]>;
  carriages$: Observable<Carriage[]>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store,
    private carriageFacade: CarriageFacade,
    private dialog: MatDialog,
  ) {
    this.searchResults$ = this.store.select(SearchSelectors.selectSearchResults);
    this.searchError$ = this.store.select(SearchSelectors.selectError);
    this.stations$ = this.store.select(SearchSelectors.selectStations);
    this.carriages$ = this.carriageFacade.carriages$;
    this.loading$ = this.store.select(SearchSelectors.selectLoading);
  }

  ngOnInit() {
    this.store.dispatch(SearchActions.loadStations());
    this.carriageFacade.loadCarriages();
  }

  performSearch(criteria: SearchCriteria) {
    this.store.dispatch(SearchActions.performSearch({ criteria }));
  }

  openRouteDialog(route: Route): void {
    const preparedData = this.prepareRouteData(route);
    console.log('Prepared Data:', preparedData);

    this.dialog.open(RouteDetailsModalComponent, {
      width: '600px',
      data: {
        detailsId: route.id,
        ...preparedData,
      },
    });
  }

  private prepareRouteData(route: Route) {
    const getCityNameById = (id: number): Observable<string> => {
      return this.stations$.pipe(map((stations) => stations.find((station) => station.stationId === id)?.city || 'Unknown'));
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

  getCarriageInfoByCode(route: Route, carriageCode: string): CarriageItem | undefined {
    return route.carriagesInfo?.find((c) => c.code === carriageCode);
  }

  calculatePricePerSeat(route: Route, carriageCode: string): number {
    const carriageItem = this.getCarriageInfoByCode(route, carriageCode);
    if (!carriageItem) return 0;

    const carriagePrice = route.schedule
      .flatMap((schedule) => schedule.segments)
      .reduce((accum, segment) => accum + (segment.price[carriageCode] || 0), 0);

    const totalSeats = carriageItem.leftSeats + carriageItem.rightSeats;
    return totalSeats > 0 ? carriagePrice / totalSeats : 0;
  }

  countTotalSeatsByClass(route: Route): { [key: string]: number } {
    const seatCounts = {
      carriage1: 0,
      carriage2: 0,
      carriage3: 0,
    };

    if (!route.carriagesInfo || !Array.isArray(route.carriagesInfo)) {
      return seatCounts;
    }

    route.carriagesInfo.forEach((carriage) => {
      const freeSeats = (carriage.leftSeats || 0) + (carriage.rightSeats || 0);

      switch (carriage.code) {
        case 'carriage1':
          seatCounts.carriage1 += freeSeats;
          break;
        case 'carriage2':
          seatCounts.carriage2 += freeSeats;
          break;
        case 'carriage3':
          seatCounts.carriage3 += freeSeats;
          break;
        default:
          break;
      }
    });

    return seatCounts;
  }
}
