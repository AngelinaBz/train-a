import { NgForOf } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

import { paths } from '../../../shared/configs/paths';
import getRideFromTo from '../../helpers/getRideFromTo';
import RideDetails from '../../models/RideDetails.model';
import { SearchResultsStations } from '../../models/Search.model';
import { RouteDetailsModalComponent } from '../route-details-modal/route-details-modal.component';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [MatButton, MatIcon, NgForOf],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss',
})
export class SearchCardComponent implements OnChanges, OnInit {
  @Input() rideDetails!: RideDetails;
  @Input() rideId!: number;
  @Input() from!: SearchResultsStations;
  @Input() to!: SearchResultsStations;
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
