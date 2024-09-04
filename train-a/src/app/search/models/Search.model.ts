import RideDetails, { Segment } from './RideDetails.model';

export interface SearchResultsStations {
  stationId: number;
  city: string;
  geolocation: {
    latitude: number;
    longitude: number;
  };
}

export interface SearchResultsBase {
  from: SearchResultsStations;
  to: SearchResultsStations;
}

export interface Route {
  id: number;
  path: number[];
  carriages: string[];
  schedule: {
    rideId: number;
    segments: Segment[];
  }[];
}

export interface RouteWithRideDetails {
  id: number;
  path: number[];
  carriages: string[];
  schedule: RideDetails[];
}

export interface SearchResultsRaw extends SearchResultsBase {
  routes: Route[];
}

export interface SearchResult extends SearchResultsBase {
  routes: RouteWithRideDetails[];
}

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
