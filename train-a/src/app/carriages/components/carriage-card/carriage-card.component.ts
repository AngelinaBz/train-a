import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { Carriage } from '../../state/carriage.model';

@Component({
  selector: 'app-carriage-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './carriage-card.component.html',
  styleUrl: './carriage-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarriageCardComponent implements OnChanges {
  @Input() name?: string;
  @Input() carriage!: Carriage;
  @Input() editable: boolean = false;
  @Input() selectable: boolean = false;
  @Input() occupiedSeats: number[] = [];
  @Input() selectedSeat?: number;
  @Output() selectCarriage = new EventEmitter<{
    carriage: Carriage;
    seat: number;
  }>();
  @Output() editCarriage = new EventEmitter<Carriage>();
  @Output() deleteCarriage = new EventEmitter<Carriage>();

  carriagesData: {
    name: string;
    leftSeats: number;
    rightSeats: number;
    rows: number;
    totalSeats: number;
    rightRows: number[][];
    leftRows: number[][];
  } | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['carriage'] && changes['carriage'].currentValue) {
      this.carriagesData = this.initializeRows(this.carriage);
    }
  }

  initializeRows(carriage: Carriage): {
    name: string;
    leftSeats: number;
    rightSeats: number;
    rows: number;
    totalSeats: number;
    rightRows: number[][];
    leftRows: number[][];
  } {
    const { leftSeats, rightSeats, rows } = carriage;
    const seatsInRow = leftSeats + rightSeats;
    const totalSeats = seatsInRow * rows;

    const rightRows: number[][] = [];
    const leftRows: number[][] = [];

    let rowNumber = 0;
    let seatNumberInRow = 1;

    rightRows.push([]);
    leftRows.push([]);

    for (let i = 1; i <= totalSeats; i += 1) {
      if (seatNumberInRow <= leftSeats) {
        leftRows[rowNumber].push(i);
      } else {
        rightRows[rowNumber].push(i);
      }

      seatNumberInRow += 1;
      if (seatNumberInRow > seatsInRow && i < totalSeats) {
        seatNumberInRow = 1;
        rowNumber += 1;
        rightRows.push([]);
        leftRows.push([]);
      }
    }

    return {
      leftSeats,
      rightSeats,
      rows,
      totalSeats,
      rightRows,
      leftRows,
      name: carriage.name,
    };
  }

  onUpdate() {
    if (this.editable) {
      this.editCarriage.emit(this.carriage);
    }
  }

  onDelete() {
    this.deleteCarriage.emit(this.carriage);
  }

  onSeatSelect(seat: number): void {
    this.selectedSeat = seat;
    const selectedSeatData = {
      carriage: this.carriage,
      seat: this.selectedSeat,
    };

    this.selectCarriage.emit(selectedSeatData);
    console.log('Selected seats:', selectedSeatData);
  }

  isSelected(seat: number): boolean {
    return this.selectedSeat === seat;
  }
}
