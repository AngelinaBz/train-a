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
  routes: Array<{
    departureTime: string;
    arrivalTime: string;
    duration: string;
    fromCity: string;
    toCity: string;
    firstClassPrice?: number;
    secondClassPrice?: number;
    womenOnlyPrice?: number;
  }>;
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
  carriages: string[];
  schedule: Schedule[];
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
  time: string[];
  price: Record<string, number>;
  occupiedSeats: number[];
}
