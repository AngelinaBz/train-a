import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { Carriage } from '../../state/carriage.model';

@Component({
  selector: 'app-carriage-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatDividerModule],
  templateUrl: './carriage-card.component.html',
  styleUrl: './carriage-card.component.scss',
})
export class CarriageCardComponent implements OnInit {
  @Input() carriage!: Carriage;

  carriagesData: {
    leftSeats: number;
    rightSeats: number;
    rows: number;
    totalSeats: number;
    rightRows: number[][];
    leftRows: number[][];
  } | null = null;

  ngOnInit(): void {
    if (this.carriage) {
      this.carriagesData = this.initializeRows(this.carriage);
    }
  }

  private initializeRows(carriage: Carriage): {
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
    };
  }
}
