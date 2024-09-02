import { AsyncPipe, DatePipe, JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component, effect, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError } from '@angular/material/form-field';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { ApiError } from '../../../shared/models/ApiError.model';
import { StationFacade } from '../../../stations/state/station.facade';
import RideDetails from '../../models/RideDetails.model';
import { DetailsFacade } from '../../state/details/details.facade';

type TableRow = {
  time: {
    start?: number;
    end?: number;
  };
  station: {
    name: string;
    id: number;
  };
  stop: number | string;
};

@Component({
  selector: 'app-route-details-modal',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatButton,
    MatDialogActions,
    NgIf,
    DatePipe,
    NgClass,
    MatError,
    MatProgressSpinner,
  ],
  templateUrl: './route-details-modal.component.html',
  styleUrl: './route-details-modal.component.scss',
})
export class RouteDetailsModalComponent {
  dialogData: {
    detailsId: number;
    from?: number;
    to?: number;
  } = inject(MAT_DIALOG_DATA);

  data$: ReturnType<typeof this.detailsFacade.getRideDetails>;

  tableData: ReturnType<typeof this.makeTable> = [];
  data: Signal<RideDetails | null | undefined>;
  isLoading: Signal<boolean | undefined>;
  error: Signal<ApiError | null | undefined>;

  stations$ = this.stationFacade.stations$;
  stations = toSignal(this.stations$);
  stationsIsLoading = toSignal(this.stationFacade.isLoading$);
  stationsError = toSignal(this.stationFacade.stationError$);

  constructor(
    private detailsFacade: DetailsFacade,
    private stationFacade: StationFacade,
  ) {
    const id = this.dialogData.detailsId!;

    if (!id) {
      throw new Error('detailsId id is required');
    }

    this.detailsFacade.loadDetails(id);
    this.stationFacade.loadStations();

    this.data$ = this.detailsFacade.getRideDetails({
      rideId: id,
    });

    this.data = toSignal(this.data$);
    this.isLoading = toSignal(this.detailsFacade.getRideDetailsLoading(id));
    this.error = toSignal(this.detailsFacade.getRideDetailsError(id));

    effect(() => {
      const data = this.data();

      console.log(data);

      if (data) {
        this.tableData = this.makeTable(data);
      }
    });
  }

  makeTable(data: RideDetails) {
    return data.path.reduce((acc: Array<TableRow>, curr, index, arr) => {
      const row: TableRow = {
        time: {},
        station: {
          name: '',
          id: curr,
        },
        stop: '',
      };

      if (index === 0) {
        row.time.start = Date.parse(data.schedule.segments[index].time[0]);
        row.stop = 'first station';
      } else if (index === arr.length - 1) {
        row.time.start = Date.parse(data.schedule.segments[index - 1].time[1]);
        row.stop = 'last station';
      } else {
        row.time.start = Date.parse(data.schedule.segments[index - 1].time[1]);
        row.time.end = Date.parse(data.schedule.segments[index].time[0]);
        row.stop = `${(row.time.end - row.time.start) / 1000 / 60} min`;
      }

      row.station = {
        name: this.stations()?.find((station) => station.id === curr)?.city || `Station ${curr}`,
        id: curr,
      };

      acc.push(row);

      return acc;
    }, []);
  }
}
