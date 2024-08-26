export interface SearchCriteria {
  fromCode: string;
  toCode: string;
  date: string;
  time?: string;
}

export interface SearchResult {
  interval_segments?: IntervalSegment[];
  search: {
    from: StationInfo;
    to: StationInfo;
    date: string;
  };
  segments: Segment[];
  interval_schedule?: IntervalSchedule;
}

export interface IntervalSegment {
  departure: string;
  arrival: string;
  duration: number;
  from: StationInfo;
  to: StationInfo;
  thread: Thread;
}

export interface IntervalSchedule {
  schedule_type: string;
  timezone: string;
}

export interface StationInfo {
  code: string;
  title: string;
  station_type: string;
  transport_type: string;
  popular_title: string;
  short_title: string;
  station_type_name: string;
  type: string;
}

export interface Segment {
  arrival: string;
  departure: string;
  duration: number;
  from: StationInfo;
  to: StationInfo;
  thread: Thread;
  stops?: string;
  has_transfers: boolean;
  tickets_info?: TicketsInfo;
}

export interface Thread {
  uid: string;
  title: string;
  number: string;
  short_title: string;
  thread_method_link: string;
  carrier: Carrier;
  transport_type: string;
  vehicle?: string;
}

export interface Carrier {
  code: string;
  title: string;
  codes: CarrierCodes;
}

export interface CarrierCodes {
  icao?: string;
  sirena?: string;
  iata?: string;
}

export interface TicketsInfo {
  places?: Place[];
  et_marker?: boolean;
}

export interface Place {
  price: Price;
  name: string;
  count: number;
}

export interface Price {
  currency: string;
  whole: number;
  cents: number;
  total: number;
}
