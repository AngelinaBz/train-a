export interface Segment {
  price: { [key: string]: number };
  occupiedSeats: number[];
  time: string[];
}

export default interface RideDetails {
  rideId: number;
  path: number[];
  carriages: string[];
  schedule: {
    segments: Segment[];
  };
}
