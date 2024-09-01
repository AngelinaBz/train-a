import { Carriage } from '../../carriages/state/carriage.model';
import RideDetails from '../models/RideDetails.model';

function getCarriageSeats(ride: RideDetails, carriagesTypes: Carriage[]) {
  let seatsBefore = 0;

  return ride.carriages.map((carriage) => {
    const type = carriagesTypes.find((item) => item.code === carriage);

    if (type) {
      const currentSeats = (type.leftSeats + type.rightSeats) * type.rows;
      const occupiedSeats = [
        ...new Set(
          ride.schedule.segments.reduce(
            (_acc: number[], segment) => [
              ..._acc,
              ...segment.occupiedSeats.filter((seat) => seatsBefore < seat && seat <= seatsBefore + currentSeats),
            ],
            [],
          ),
        ),
      ];
      seatsBefore += currentSeats;
      return {
        code: carriage,
        total: currentSeats,
        free: currentSeats - occupiedSeats.length,
        occupiedSeats,
      };
    }

    return {
      code: carriage,
      total: 0,
      free: 0,
      occupiedSeats: [],
    };
  });
}

export default getCarriageSeats;
