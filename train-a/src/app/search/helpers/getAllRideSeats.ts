import { Carriage } from '../../carriages/state/carriage.model';
import RideDetails from '../models/RideDetails.model';
import getCarriageSeats from './getCarriageSeats';

function getAllRideSeats(ride: RideDetails, carriagesTypes: Carriage[]): Record<string, number> {
  const seats = getCarriageSeats(ride, carriagesTypes);

  return seats.reduce((acc: Record<string, number>, item) => {
    acc[item.code] = (acc[item.code] ?? 0) + item.free;

    return acc;
  }, {});
}

export default getAllRideSeats;
