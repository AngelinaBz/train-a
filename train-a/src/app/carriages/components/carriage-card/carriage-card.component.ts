import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
})
export class CarriageCardComponent implements OnInit {
  @Input() carriage!: Carriage;
  @Output() editCarriage = new EventEmitter<Carriage>();
  isEditing = false;
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

  ngOnInit(): void {
    this.isEditing = true;
    if (this.carriage) {
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
    this.isEditing = true;
    this.editCarriage.emit(this.carriage);
  }

  onDelete() {
    this.deleteCarriage.emit(this.carriage);
  }
}
