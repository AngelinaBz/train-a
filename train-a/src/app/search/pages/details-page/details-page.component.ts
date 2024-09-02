import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatToolbarRow } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { AuthFacade } from '../../../auth/state/auth.facade';
import { CarriageCardComponent } from '../../../carriages/components/carriage-card/carriage-card.component';
import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { OrderFacade } from '../../../orders/state/order.facade';
import { paths } from '../../../shared/configs/paths';
import { StationFacade } from '../../../stations/state/station.facade';
import {
  DetailsCarriagesListComponent,
  SelectSeatOutput,
} from '../../components/details-carriages-list/details-carriages-list.component';
import { DetailsHeadComponent } from '../../components/details-head/details-head.component';
import { DetailsTabGroupComponent } from '../../components/details-tab-group/details-tab-group.component';
import RideDetails from '../../models/RideDetails.model';
import { DetailsFacade } from '../../state/details/details.facade';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    MatToolbarRow,
    MatButton,
    MatIcon,
    RouterLink,
    DatePipe,
    MatFabButton,
    MatTab,
    MatTabGroup,
    NgForOf,
    NgIf,
    CarriageCardComponent,
    DetailsHeadComponent,
    DetailsTabGroupComponent,
    DetailsCarriagesListComponent,
  ],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent {
  details$!: ReturnType<typeof this.detailsFacade.getRideDetails>;

  isAuth = toSignal(this.authFacade.isLoggedIn$);

  details!: Signal<RideDetails | null | undefined>;

  stations = toSignal(this.stationFacade.stations$);

  carriages = toSignal(this.carriagesFacade.carriages$);

  activeTabIndex = 0;
  selectedSeat?: SelectSeatOutput;
  from = this.route.snapshot.queryParamMap.get('from') ?? undefined;
  to = this.route.snapshot.queryParamMap.get('to') ?? undefined;
  id = this.route.snapshot.paramMap.get('rideId') ?? undefined;

  constructor(
    private route: ActivatedRoute,
    private detailsFacade: DetailsFacade,
    private stationFacade: StationFacade,
    private carriagesFacade: CarriageFacade,
    private authFacade: AuthFacade,
    private orderFacade: OrderFacade,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    if (!this.id || !this.from || !this.to) {
      this.router.navigate([paths.main]);
    }

    this.carriagesFacade.loadCarriages();
    this.detailsFacade.loadDetails(Number(this.id));
    this.stationFacade.loadStations();

    this.details$ = this.detailsFacade.getRideDetails({
      rideId: Number(this.id),
      from: Number(this.from),
      to: Number(this.to),
    });

    this.details = toSignal(this.details$);
  }

  makeOrder(): void {
    this.orderFacade.makeOrder({
      order: {
        rideId: Number(this.id),
        seat: this.selectedSeat!.seat,
        stationStart: Number(this.from),
        stationEnd: Number(this.to),
      },
      onSuccess: () => {
        this.detailsFacade.loadDetails(Number(this.id));
        this.snackBar.open('Order created', 'Close', {
          duration: 3000,
        });
      },
      onFailure: (state) => {
        this.snackBar.open(state.error?.message ?? 'order failed', 'Close', {
          duration: 3000,
        });
      },
    });
  }

  protected readonly paths = paths;
}
