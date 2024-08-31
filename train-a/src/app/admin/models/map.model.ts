export interface Marker {
  lat: number;
  lng: number;
  city: string;
}

export interface StationResponse {
  id: number;
  city: string;
  latitude: number;
  longitude: number;
  connectedTo: { id: number; distance: number }[];
}

export interface Station {
  city: string;
  latitude: number;
  longitude: number;
  relations: number[];
}
