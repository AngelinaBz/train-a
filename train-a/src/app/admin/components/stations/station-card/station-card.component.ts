import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';

import { StationResponse } from '../../../models/map.model';
import { StationFacade } from '../../../state/station.facade';

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './station-card.component.html',
  styleUrl: './station-card.component.scss',
})
export class StationCardComponent implements OnInit {
  @Input() station!: StationResponse;
  allStations$!: Observable<StationResponse[]>;
  loadingDeleting$!: Observable<boolean>;

  constructor(private stationFacade: StationFacade) {}

  ngOnInit(): void {
    this.allStations$ = this.stationFacade.allStations$;
    this.loadingDeleting$ = this.stationFacade.loadingDeleting$;
  }

  getConnectedStations(allStations: StationResponse[]): { city: string }[] {
    if (!this.station || !this.station.connectedTo || !allStations) {
      return [];
    }
    return this.station.connectedTo.map((conn) => {
      const connectedStation = allStations.find((stn) => stn.id === conn.id);
      return {
        city: connectedStation?.city || '',
      };
    });
  }

  deletStation(): void {
    if (this.station.id) {
      this.stationFacade.deleteStation(this.station.id);
    }
  }
}
