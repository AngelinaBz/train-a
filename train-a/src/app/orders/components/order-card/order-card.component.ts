import { Component, Input } from '@angular/core';

import { Order } from '../../state/order.model';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss',
})
export class OrderCardComponent {
  @Input() order!: Order;
}
