import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CarriageCardComponent } from '../../components/carriage-card/carriage-card.component';
import { CarriageFacade } from '../../state/carriage.facade';

@Component({
  selector: 'app-carriage-admin-page',
  standalone: true,
  imports: [CommonModule, CarriageCardComponent],
  templateUrl: './carriage-admin-page.component.html',
  styleUrl: './carriage-admin-page.component.scss',
})
export class CarriageAdminPageComponent {
  carriages$ = this.carriageFacade.carriages$;
  isLoading$ = this.carriageFacade.isLoading$;

  constructor(private carriageFacade: CarriageFacade) {
    this.carriageFacade.loadCarriages();
  }
}
