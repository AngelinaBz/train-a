import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs';

import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { Carriage } from '../../../carriages/state/carriage.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { Order } from '../../state/order.model';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss',
  providers: [DatePipe],
})
export class OrderCardComponent implements OnInit {
  @Input() order!: Order;

  stations$ = this.stationFacade.stations$;
  carriages$ = this.carriageFacade.carriages$;
  startStationName: string = '';
  startIndex: number = 0;
  endStationName: string = '';
  endIndex: number = 0;
  startTime: Date | null = null;
  endTime: Date | null = null;
  duration: string = '';
  carriageName: string = '';
  carriageNumber: number = 0;
  seatNumber: number = 0;
  totalPrice: number = 0;
  formattedStartTime: string = '';
  formattedEndTime: string = '';

  constructor(
    private stationFacade: StationFacade,
    private carriageFacade: CarriageFacade,
    private datePipe: DatePipe,
  ) {}

  ngOnInit() {
    console.log(this.order);
    const token = localStorage.getItem('auth_token');
    if (token) {
      this.stationFacade.loadStations(token);
      this.carriageFacade.loadCarriages(token);
      this.loadStationsData();
      this.loadCarriageData();
      this.initializeTimes();
    }
  }

  loadStationsData() {
    this.stations$
      .pipe(
        map((stations) => {
          this.startStationName = stations.find((s) => s.id === this.order.stationStart)?.city || '';
          this.endStationName = stations.find((s) => s.id === this.order.stationEnd)?.city || '';
        }),
      )
      .subscribe();
    this.getStationsIndex();
  }

  loadCarriageData() {
    this.carriages$.subscribe((carriages) => {
      this.calculateSeatNumber(carriages, this.order.seatId);
      this.calculateTotalPrice();
    });
  }

  getStationsIndex() {
    this.startIndex = this.order.path.indexOf(this.order.stationStart);
    this.endIndex = this.order.path.indexOf(this.order.stationEnd);
  }

  initializeTimes() {
    if (
      this.startIndex >= 0 &&
      this.endIndex >= 0 &&
      this.startIndex < this.endIndex &&
      this.order.schedule.segments.length === this.order.path.length - 1
    ) {
      this.startTime = new Date(this.order.schedule.segments[this.startIndex].time[0]);
      this.endTime = new Date(this.order.schedule.segments[this.endIndex - 1].time[1]);
      this.duration = this.calculateDuration(this.startTime, this.endTime);
      this.formattedStartTime = this.datePipe.transform(this.startTime, 'MMMM dd, HH:mm')!;
      this.formattedEndTime = this.datePipe.transform(this.endTime, 'MMMM dd, HH:mm')!;
    }
  }

  calculateDuration(start: Date, end: Date): string {
    const diffMs = end.getTime() - start.getTime();
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${diffHrs}h ${diffMins}m`;
  }

  calculateSeatNumber(carriages: Carriage[], seatId: number) {
    let accumulatedSeats = 0;

    this.order.carriages.some((carriageName) => {
      const carriage = carriages.find((c) => c.name === carriageName);

      if (carriage) {
        const seatsInCarriage = carriage.rows * (carriage.leftSeats + carriage.rightSeats);

        if (seatId <= accumulatedSeats + seatsInCarriage) {
          this.carriageNumber = this.order.carriages.indexOf(carriageName) + 1;
          this.carriageName = carriage.name;
          this.seatNumber = seatId - accumulatedSeats;
          return true;
        }

        accumulatedSeats += seatsInCarriage;
      }
      return false;
    });
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    for (let i = this.startIndex; i < this.endIndex; i += 1) {
      const segment = this.order.schedule.segments[i];
      const price = segment.price[this.carriageName];
      if (price) {
        this.totalPrice += price;
      }
    }
  }

  cancelOrder() {
    console.log('cancel');
  }
}
