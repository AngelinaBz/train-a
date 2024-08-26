export interface SearchCriteria {
  fromLatitude: number;
  fromLongitude: number;
  toLatitude: number;
  toLongitude: number;
  time?: number;
}

export interface SearchResult {
  from: StationInfo;
  to: StationInfo;
  routes: Route[];
}

export interface StationInfo {
  stationId: number;
  city: string;
  geolocation: {
    latitude: number;
    longitude: number;
  };
}

export interface Route {
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
  time: string[];
  price: Record<string, number>;
  occupiedSeats: number[];
}
