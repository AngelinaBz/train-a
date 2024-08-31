import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { StationFacade } from '../../../routes/state/station.facade';
import { Roles } from '../../../user/models/Roles.model';
import User from '../../../user/models/User.model';
import { UserFacade } from '../../../user/state/user.facade';
import { OrderCardComponent } from '../../components/order-card/order-card.component';
import { Order } from '../../models/order.model';
import { OrderFacade } from '../../state/order.facade';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, OrderCardComponent, MatToolbarModule, MatProgressSpinner],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  orders$ = this.orderFacade.orders$;
  sortedOrders: Order[] = [];
  isLoading$ = this.orderFacade.isLoading$;
  user?: User;
  isManager: boolean = false;

  constructor(
    private orderFacade: OrderFacade,
    private stationFacade: StationFacade,
    private carriageFacade: CarriageFacade,
    private userFacade: UserFacade,
  ) {}

  ngOnInit() {
    this.userFacade.getUserProfile();
    this.userFacade.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.isManager = this.user?.role === Roles.MANAGER;
        this.loadOrders();
      }
    });
    this.stationFacade.loadStations();
    this.carriageFacade.loadCarriages();
  }

  loadOrders() {
    this.orderFacade.loadOrders(this.isManager);
    if (this.isManager) {
      this.userFacade.getAllUsers();
    }
    this.orders$.subscribe((orders) => {
      this.sortedOrders = this.sortOrdersByStartTime([...orders]);
    });
  }

  sortOrdersByStartTime(orders: Order[]): Order[] {
    return orders.sort((a, b) => {
      const aStartIndex = a.path.indexOf(a.stationStart);
      const bStartIndex = b.path.indexOf(b.stationStart);

      if (aStartIndex === -1 || bStartIndex === -1) {
        return 0;
      }

      if (!a.schedule.segments[aStartIndex].time[0]) return 1;
      if (!b.schedule.segments[bStartIndex].time[0]) return -1;

      const dateA = new Date(a.schedule.segments[aStartIndex].time[0]);
      const dateB = new Date(b.schedule.segments[bStartIndex].time[0]);

      return dateA.getTime() - dateB.getTime();
    });
  }
}
