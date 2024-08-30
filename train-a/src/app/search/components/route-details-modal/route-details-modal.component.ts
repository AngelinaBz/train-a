import { AsyncPipe, DatePipe, JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatError } from '@angular/material/form-field';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { ApiError } from '../../../shared/models/ApiError.model';
import RideDetails from '../../models/RideDetails.model';
import { DetailsFacade } from '../../state/details/details.facade';

type TableRow = {
  time: {
    start?: number;
    end?: number;
  };
  station: string;
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
  } = inject(MAT_DIALOG_DATA);

  data$: ReturnType<typeof this.detailsFacade.getRideDetails>;

  tableData: ReturnType<typeof this.makeTable> = [];
  data: Signal<RideDetails | null | undefined>;
  isLoading: Signal<boolean | undefined>;
  error: Signal<ApiError | null | undefined>;

  constructor(private detailsFacade: DetailsFacade) {
    const id = this.dialogData.detailsId!;

    if (!id) {
      throw new Error('detailsId id is required');
    }

    this.detailsFacade.loadDetails(id);
    this.data$ = this.detailsFacade.getRideDetails(id);

    this.data$.subscribe((data) => {
      if (data) {
        this.tableData = this.makeTable(data);
      }
    });

    this.data = toSignal(this.data$);
    this.isLoading = toSignal(this.detailsFacade.getRideDetailsLoading(id));
    this.error = toSignal(this.detailsFacade.getRideDetailsError(id));
  }

  makeTable(data: RideDetails) {
    return data.path.reduce((acc: Array<TableRow>, curr, index, arr) => {
      const row: TableRow = { time: {}, station: '', stop: '' };

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

      row.station = `Station ${curr}`;

      acc.push(row);

      return acc;
    }, []);
  }
}
