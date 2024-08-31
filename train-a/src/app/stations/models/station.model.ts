export interface Station {
  id: number;
  city: string;
  latitude: number;
  longitude: number;
  relations: number[];
  connectedTo: ConnectedStation[];
}

export interface ConnectedStation {
  id: number;
  distance: number;
}

export type StationWithoutId = Omit<Station, 'id'>;
