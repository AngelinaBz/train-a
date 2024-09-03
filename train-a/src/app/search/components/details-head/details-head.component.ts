import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

import { paths } from '../../../shared/configs/paths';
import { Station } from '../../../stations/models/station.model';
import RideDetails from '../../models/RideDetails.model';
import { RouteDetailsModalComponent } from '../route-details-modal/route-details-modal.component';

@Component({
  selector: 'app-details-head',
  standalone: true,
  imports: [DatePipe, MatButton, MatIcon, MatToolbarRow, RouterLink],
  templateUrl: './details-head.component.html',
  styleUrl: './details-head.component.scss',
})
export class DetailsHeadComponent {
  @Input() id!: string;
  @Input() from!: string;
  @Input() to!: string;
  @Input() details!: RideDetails;
  @Input() stations!: Station[];

  constructor(private dialog: MatDialog) {}

  getStationName(id: string | undefined) {
    const { stations } = this;

    if (stations && id) {
      return stations.find((station) => station.id === Number(id));
    }

    return undefined;
  }

  openModal() {
    this.dialog.open(RouteDetailsModalComponent, {
      data: {
        detailsId: this.id,
        from: Number(this.from),
        to: Number(this.to),
      },
    });
  }

  protected readonly paths = paths;
}
