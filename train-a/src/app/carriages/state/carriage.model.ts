export interface Carriage {
  code: string;
  name: string;
  rows: number;
  info: string;
  leftSeats: number;
  rightSeats: number;
}

export interface SeatCounts {
  carriage1: number;
  carriage2: number;
  carriage3: number;
}
