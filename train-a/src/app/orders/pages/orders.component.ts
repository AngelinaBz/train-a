import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { OrderCardComponent } from '../components/order-card/order-card.component';
import { OrderFacade } from '../state/order.facade';
import { Order } from '../state/order.model';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, OrderCardComponent, MatToolbarModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  orders$ = this.orderFacade.orders$;
  sortedOrders: Order[] = [];

  constructor(private orderFacade: OrderFacade) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderFacade.loadOrders(false);
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
