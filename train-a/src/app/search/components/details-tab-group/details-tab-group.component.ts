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
  @Output() tabChange = new EventEmitter<number>();
  protected readonly getAllRideSeats = getAllRideSeats;
  protected readonly getAllRidePrices = getAllRidePrices;

  onTabChange(event: MatTabChangeEvent) {
    const list = this.carriages;
    const filteredList = this.carriages.filter((carriage) => this.details.carriages.includes(carriage.code));

    const result = list.reduce((acc: Record<number, number | null>, item, i) => {
      acc[i] = filteredList.includes(item) ? filteredList.findIndex((carriage) => carriage.code === item.code) : null;
      return acc;
    }, {});

    const swappedObject = Object.entries(result).reduce((acc: Record<number, number>, [key, value]) => {
      if (value == null) {
        return acc;
      }
      acc[Number(value)] = Number(key);
      return acc;
    }, {});

    this.tabChange.emit(swappedObject[event.index]);
  }
}
