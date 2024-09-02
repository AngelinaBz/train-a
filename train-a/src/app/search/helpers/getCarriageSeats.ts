import { Carriage } from '../../carriages/state/carriage.model';
import RideDetails from '../models/RideDetails.model';

export interface CarriageSeats {
  seatsBefore: number;
  code: string;
  total: number;
  free: number;
  occupiedSeats: number[];
  carriageSeats: number[];
}

function getCarriageSeats(ride: RideDetails, carriagesTypes: Carriage[]): CarriageSeats[] {
  let seatsBefore = 0;

  return ride.carriages.map((carriage) => {
    const type = carriagesTypes.find((c) => c.code === carriage);
    const totalSeats = ((type?.leftSeats ?? 0) + (type?.rightSeats ?? 0)) * (type?.rows ?? 0);
    const occupiedSeats = [
      ...new Set(
        ride.schedule.segments
          .map((segment) => segment.occupiedSeats.filter((seat) => seatsBefore < seat && seat < seatsBefore + totalSeats))
          .flat(Infinity) as number[],
      ),
    ];

    const result = {
      seatsBefore,
      code: carriage,
      total: totalSeats,
      free: totalSeats - occupiedSeats.length,
      occupiedSeats,
      carriageSeats: occupiedSeats.map((seat) => seat - seatsBefore),
    };

    seatsBefore += totalSeats;

    return result;
  });
}

export default getCarriageSeats;
