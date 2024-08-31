import { Component, Input } from '@angular/core';

import { Route } from '../../models/route.model';

@Component({
  selector: 'app-route-card',
  standalone: true,
  imports: [],
  templateUrl: './route-card.component.html',
  styleUrl: './route-card.component.scss',
})
export class RouteCardComponent {
  @Input() route!: Route;
}
