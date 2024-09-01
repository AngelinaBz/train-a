import { DatePipe } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarRow } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { paths } from '../../../shared/configs/paths';
import { ApiError } from '../../../shared/models/ApiError.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { RouteDetailsModalComponent } from '../../components/route-details-modal/route-details-modal.component';
import RideDetails from '../../models/RideDetails.model';
import { DetailsFacade } from '../../state/details/details.facade';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [MatToolbarRow, MatButton, MatIcon, RouterLink, DatePipe, MatFabButton],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent {
  details$!: ReturnType<typeof this.detailsFacade.getRideDetails>;
  detailsError$!: ReturnType<typeof this.detailsFacade.getRideDetailsError>;
  details!: Signal<RideDetails | null | undefined>;
  detailsIsLoading!: Signal<boolean | undefined>;
  detailsError!: Signal<ApiError | null | undefined>;

  stations = toSignal(this.stationFacade.stations$);
  stationsIsLoading = toSignal(this.stationFacade.isLoading$);
  stationsError = toSignal(this.stationFacade.stationError$);

  from = this.route.snapshot.queryParamMap.get('from');
  to = this.route.snapshot.queryParamMap.get('to');
  id = this.route.snapshot.paramMap.get('rideId');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detailsFacade: DetailsFacade,
    private stationFacade: StationFacade,
    private dialog: MatDialog,
  ) {
    if (this.id) {
      this.detailsFacade.loadDetails(Number(this.id));
      this.stationFacade.loadStations();

      this.details$ = this.detailsFacade.getRideDetails(Number(this.id));
      this.detailsError$ = this.detailsFacade.getRideDetailsError(Number(this.id));
      this.details = toSignal(this.details$);
      this.detailsIsLoading = toSignal(this.detailsFacade.getRideDetailsLoading(Number(this.id)));
      this.detailsError = toSignal(this.detailsError$);
    }
  }

  getStationName(id: string | null) {
    const stations = this.stations();

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
