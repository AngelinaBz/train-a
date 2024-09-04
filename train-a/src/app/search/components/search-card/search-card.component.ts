import { CommonModule, DecimalPipe, NgForOf, NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

import { Carriage } from '../../../carriages/state/carriage.model';
import { paths } from '../../../shared/configs/paths';
import getAllRidePrices from '../../helpers/getAllRidePrices';
import getAllRideSeats from '../../helpers/getAllRideSeats';
import getRideFromTo from '../../helpers/getRideFromTo';
import RideDetails from '../../models/RideDetails.model';
import { SearchResultsStations } from '../../models/Search.model';
import { RouteDetailsModalComponent } from '../route-details-modal/route-details-modal.component';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon, DecimalPipe, NgForOf, NgIf],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss',
})
export class SearchCardComponent implements OnChanges, OnInit {
  @Input() rideDetails!: RideDetails;
  @Input() rideId!: number;
  @Input() from!: SearchResultsStations;
  @Input() to!: SearchResultsStations;
  @Input() carriages!: Carriage[];
  details!: ReturnType<typeof getRideFromTo>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {
    console.log(this.from, this.to);
    this.details = getRideFromTo({
      from: this.from.stationId,
      to: this.to.stationId,
      details: this.rideDetails,
    });
  }

  ngOnChanges() {
    this.details = getRideFromTo({
      from: this.from.stationId,
      to: this.to.stationId,
      details: this.rideDetails,
    });
  }

  isRideInFuture(): boolean {
    const departureTime = new Date(this.rideDetails.schedule.segments[0].time[0]);
    const currentTime = new Date();
    return departureTime > currentTime;
  }

  calculatePricePerSeat(classType: string): number {
    const prices = getAllRidePrices(this.rideDetails);
    return prices[classType] ?? 0;
  }

  countTotalSeatsByClass(): Record<string, number> {
    return getAllRideSeats(this.rideDetails, this.carriages);
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

  openRouteDialog({ detailsId, from, to, event }: { detailsId: number; from: number; to: number; event: MouseEvent }): void {
    event.preventDefault();
    event.stopPropagation();
    this.dialog.open(RouteDetailsModalComponent, {
      width: '600px',
      data: {
        detailsId,
        from,
        to,
      },
    });
  }

  navigateToTrip({ rideId, from, to }: { rideId: number; from: number; to: number }): void {
    this.router.navigate([paths.trip, rideId], {
      queryParams: { from, to },
    });
  }
}
