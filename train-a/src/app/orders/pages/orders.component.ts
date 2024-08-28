import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { OrderCardComponent } from '../components/order-card/order-card.component';
import { OrderFacade } from '../state/order.facade';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, OrderCardComponent, MatToolbarModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  orders$ = this.orderFacade.orders$;

  constructor(private orderFacade: OrderFacade) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.orderFacade.loadOrders(token, false);
    }
  }
}
