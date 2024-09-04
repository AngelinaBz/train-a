import { Route, RouteWithRideDetails } from '../models/Search.model';

function convertRouteToRideDetails(route: Route): RouteWithRideDetails {
  return {
    id: route.id,
    path: route.path,
    carriages: route.carriages,
    schedule: route.schedule.map((ride) => ({
      rideId: ride.rideId,
      routeId: route.id,
      path: route.path,
      carriages: route.carriages,
      schedule: {
        segments: ride.segments,
      },
    })),
  };
}

export default convertRouteToRideDetails;
