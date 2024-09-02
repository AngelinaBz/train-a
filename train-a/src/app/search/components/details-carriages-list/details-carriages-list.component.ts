import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CarriageCardComponent } from '../../../carriages/components/carriage-card/carriage-card.component';
import { Carriage } from '../../../carriages/state/carriage.model';
import getCarriageSeats from '../../helpers/getCarriageSeats';
import RideDetails from '../../models/RideDetails.model';

export interface SelectSeatOutput {
  car: number;
  carriageSeat: number;
  seat: number;
}

@Component({
  selector: 'app-details-carriages-list',
  standalone: true,
  imports: [CarriageCardComponent, NgIf],
  templateUrl: './details-carriages-list.component.html',
  styleUrl: './details-carriages-list.component.scss',
})
export class DetailsCarriagesListComponent implements OnInit {
  @Input() details!: RideDetails;
  @Input() carriages!: Carriage[];
  @Input() carriageTypeIndex: number = 0;
  @Output() selectSeat = new EventEmitter<SelectSeatOutput>();
  selectedSeat?: number;
  carriagesMeta!: ReturnType<typeof getCarriageSeats>;

  ngOnInit() {
    this.carriagesMeta = getCarriageSeats(this.details, this.carriages);
  }

  onSeatChange({ seat, car, seatsBefore }: { seat: number; car: number; seatsBefore: number }) {
    console.log(car, seatsBefore + seat);

    this.selectedSeat = seatsBefore + seat;

    this.selectSeat.emit({
      car,
      carriageSeat: seat,
      seat: seatsBefore + seat,
    });
  }
}
