export interface RouteByID {
  id: number;
  path: number[];
  carriages: string[];
  schedule: Schedule[];
}

export interface Schedule {
  rideId: number;
  segments: Segment[];
}

export interface Segment {
  time: [string, string];
  price: Price;
}

export interface Price {
  [carriageType: string]: number;
}
