export interface Station {
  id: number;
  name: string;
}

export interface Wagon {
  type: string;
  seatsLeft: number;
  price: number;
}

export interface Route {
  id: number;
  stations: Station[];
  wagons: Wagon[];
}

export interface Trip {
  route: Route;
  departureTime: Date;
  arrivalTime: Date;
  duration: string;
  wagons: Wagon[];
}
