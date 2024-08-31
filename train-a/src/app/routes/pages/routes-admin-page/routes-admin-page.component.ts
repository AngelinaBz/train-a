import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

import { RouteCardComponent } from '../../components/route-card/route-card.component';
import { RoutesFacade } from '../../state/routes.facade';

@Component({
  selector: 'app-routes-admin-page',
  standalone: true,
  imports: [MatToolbar, RouteCardComponent, CommonModule],
  templateUrl: './routes-admin-page.component.html',
  styleUrl: './routes-admin-page.component.scss',
})
export class RoutesAdminPageComponent implements OnInit {
  routes$ = this.routesFacade.routes$;

  constructor(private routesFacade: RoutesFacade) {}

  ngOnInit() {
    this.routesFacade.loadRoutes();
    this.routes$.subscribe((routes) => {
      if (routes) {
        console.log(routes);
      }
    });
  }
}
