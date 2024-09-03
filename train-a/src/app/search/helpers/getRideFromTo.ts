import RideDetails from '../models/RideDetails.model';

function getRideFromTo({ from, to, details }: { from?: number; to?: number; details: RideDetails }) {
  const fromIndex = from ? details.path.indexOf(from) : 0;
  const toIndex = to ? details.path.indexOf(to) : details.path.length - 1;

  if (fromIndex === -1 || toIndex === -1 || fromIndex >= toIndex) {
    return {
      ...details,
      path: [],
      schedule: {
        ...details.schedule,
        segments: [],
      },
    };
  }

  return {
    ...details,
    path: details.path.slice(fromIndex, toIndex + 1),
    schedule: {
      ...details.schedule,
      segments: details.schedule.segments.slice(fromIndex, toIndex),
    },
  };
}

export default getRideFromTo;
