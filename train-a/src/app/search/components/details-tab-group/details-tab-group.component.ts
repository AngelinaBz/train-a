import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';

import { Carriage } from '../../../carriages/state/carriage.model';
import getAllRidePrices from '../../helpers/getAllRidePrices';
import getAllRideSeats from '../../helpers/getAllRideSeats';
import RideDetails from '../../models/RideDetails.model';

@Component({
  selector: 'app-details-tab-group',
  standalone: true,
  imports: [MatTab, MatTabGroup, NgIf],
  templateUrl: './details-tab-group.component.html',
  styleUrl: './details-tab-group.component.scss',
})
export class DetailsTabGroupComponent {
  @Input() details!: RideDetails;
  @Input() carriages!: Carriage[];
  @Input() activeTabIndex: number = 0;
  @Output() tabChange = new EventEmitter<number>();
  protected readonly getAllRideSeats = getAllRideSeats;
  protected readonly getAllRidePrices = getAllRidePrices;

  onTabChange(event: MatTabChangeEvent) {
    this.tabChange.emit(event.index);
  }
}
