export interface Route {
  id: number;
  path: number[];
  carriages: string[];
}

export type RouteWithoutId = Omit<Route, 'id'>;
