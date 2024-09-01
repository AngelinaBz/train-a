import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { MatToolbarRow } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { paths } from '../../../shared/configs/paths';
import { ApiError } from '../../../shared/models/ApiError.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { RouteDetailsModalComponent } from '../../components/route-details-modal/route-details-modal.component';
import getAllRidePrices from '../../helpers/getAllRidePrices';
import getAllRideSeats from '../../helpers/getAllRideSeats';
import getCarriageSeats from '../../helpers/getCarriageSeats';
import RideDetails from '../../models/RideDetails.model';
import { DetailsFacade } from '../../state/details/details.facade';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [MatToolbarRow, MatButton, MatIcon, RouterLink, DatePipe, MatFabButton, MatTab, MatTabGroup, NgForOf, NgIf],
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

  carriages = toSignal(this.carriagesFacade.carriages$);
  carriagesIsLoading = toSignal(this.carriagesFacade.isLoading$);
  carriagesError = toSignal(this.carriagesFacade.carriageError$);

  activeTabIndex = 0;
  selectedSeat: number | null = null;
  from = this.route.snapshot.queryParamMap.get('from') ?? undefined;
  to = this.route.snapshot.queryParamMap.get('to') ?? undefined;
  id = this.route.snapshot.paramMap.get('rideId') ?? undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detailsFacade: DetailsFacade,
    private stationFacade: StationFacade,
    private carriagesFacade: CarriageFacade,
    private dialog: MatDialog,
  ) {
    if (this.id && this.from && this.to) {
      this.carriagesFacade.loadCarriages();
      this.detailsFacade.loadDetails(Number(this.id));
      this.stationFacade.loadStations();

      this.details$ = this.detailsFacade.getRideDetails({
        rideId: Number(this.id),
        from: Number(this.from),
        to: Number(this.to),
      });
      this.detailsError$ = this.detailsFacade.getRideDetailsError(Number(this.id));
      this.details = toSignal(this.details$);
      this.detailsIsLoading = toSignal(this.detailsFacade.getRideDetailsLoading(Number(this.id)));
      this.detailsError = toSignal(this.detailsError$);
    }
  }

  getStationName(id: string | undefined) {
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

  onTabChange(tab: MatTabChangeEvent) {
    this.activeTabIndex = tab.index;
  }

  protected readonly paths = paths;
  protected readonly getAllRidePrices = getAllRidePrices;
  protected readonly getAllRideSeats = getAllRideSeats;
  protected readonly getCarriageSeats = getCarriageSeats;
}
