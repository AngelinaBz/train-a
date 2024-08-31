import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs';

import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { Carriage } from '../../../carriages/state/carriage.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { Roles } from '../../../user/models/Roles.model';
import User from '../../../user/models/User.model';
import UserWithId from '../../../user/models/UserWithId';
import { UserFacade } from '../../../user/state/user.facade';
import { OrderFacade } from '../../state/order.facade';
import { Order } from '../../state/order.model';
import { CancelDialogComponent } from '../cancel-dialog/cancel-dialog.component';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule, DatePipe, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss',
})
export class OrderCardComponent implements OnInit {
  @Input() order!: Order;

  user?: User;
  orderUser?: UserWithId;

  stations$ = this.stationFacade.stations$;
  carriages$ = this.carriageFacade.carriages$;

  status: string = '';
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

  constructor(
    private orderFacade: OrderFacade,
    private stationFacade: StationFacade,
    private carriageFacade: CarriageFacade,
    private userFacade: UserFacade,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    if (this.order) {
      this.status = this.order.status;
      this.loadStationsData();
      this.loadCarriageData();
      this.initializeTimes();
    }
    this.userFacade.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
    this.userFacade.users$.subscribe((users) => {
      if (users) {
        this.orderUser = users.find((user) => user.id === this.order.userId);
      }
    });
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
    if (this.startIndex >= 0 && this.endIndex >= 0 && this.startIndex < this.endIndex) {
      this.startTime = new Date(this.order.schedule.segments[this.startIndex].time[0]);
      this.endTime = new Date(this.order.schedule.segments[this.endIndex - 1].time[1]);
      this.duration = this.calculateDuration(this.startTime, this.endTime);
    }
  }

  calculateDuration(startTime: Date, endTime: Date): string {
    const diffMs = endTime.getTime() - startTime.getTime();
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
    const dialogData =
      this.user?.role === Roles.MANAGER
        ? { orderId: this.order.id, userEmail: this.orderUser?.email, userName: this.orderUser?.name }
        : {};
    const dialogRef = this.dialog.open(CancelDialogComponent, {
      data: dialogData,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.orderFacade.cancelOrder(this.order.id);
        this.orderFacade.isCancelSuccess$.subscribe((success) => {
          if (success) {
            this.snackBar.open('The order has been successfully cancelled', 'Close', {
              duration: 3000,
            });
            this.orderFacade.loadOrders(this.user?.role === Roles.MANAGER);
          }
        });
        this.orderFacade.orderError$.subscribe((error) => {
          if (error) {
            this.snackBar.open(`Error: ${error.message}`, 'Close', {
              duration: 3000,
            });
          }
        });
      }
    });
  }
}
