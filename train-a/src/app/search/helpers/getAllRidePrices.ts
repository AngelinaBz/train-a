import RideDetails from '../models/RideDetails.model';

function getAllRidePrices(rideDetails: RideDetails) {
  return rideDetails.carriages.reduce((acc: { [key: string]: number }, carriage) => {
    if (!acc[carriage]) {
      acc[carriage] = rideDetails.schedule.segments.reduce((_acc, segment) => _acc + segment.price[carriage], 0);
    }

    return acc;
  }, {});
}

export default getAllRidePrices;
