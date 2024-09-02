export interface SearchCriteria {
  fromCity: string;
  toCity: string;
  date: string;
  time?: number;
  fromLatitude: number;
  fromLongitude: number;
  toLatitude: number;
  toLongitude: number;
}

export interface StationInfo {
  stationId: number;
  city: string;
  latitude: number;
  longitude: number;
}
export interface SearchResult {
  routes: Array<Route>;
  from: {
    stationId: number;
    city: string;
    geolocation: {
      latitude: number;
      longitude: number;
    };
  };
  to: {
    stationId: number;
    city: string;
    geolocation: {
      latitude: number;
      longitude: number;
    };
  };
}
export interface Route {
  id: number;
  path: number[];
  schedule: Array<Schedule>;
  carriages: string[];
  price: { [key: string]: number };
  time: [string, string];
  carriagesInfo?: CarriageItem[];
}

export interface Schedule {
  rideId: number;
  segments: Segment[];
}

export interface RouteSchedule {
  departureTime: string;
  arrivalTime: string;
  duration: string;
}

export interface Segment {
  occupiedSeats: number[];
  price: { [key: string]: number };
  time: [string, string];
}

export type CarriageCode = 'carriage1' | 'carriage2' | 'carriage3';

export interface Carriage {
  code: string;
  info: string;
  seatsAvailable: number;
  price: number;
}

export interface CarriageItem {
  code: string;
  leftSeats: number;
  name: string;
  rightSeats: number;
  rows: number;
  mode?: string;
}
