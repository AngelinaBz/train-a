import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';

import { Station } from '../../models/station.model';
import { StationFacade } from '../../state/station.facade';

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './station-card.component.html',
  styleUrl: './station-card.component.scss',
})
export class StationCardComponent implements OnInit {
  @Input() station!: Station;
  allStations$!: Observable<Station[]>;
  loadingDeleting$!: Observable<boolean>;

  constructor(private stationFacade: StationFacade) {}

  ngOnInit(): void {
    this.allStations$ = this.stationFacade.stations$;
    this.loadingDeleting$ = this.stationFacade.loadingDeleting$;
  }

  getConnectedStations(allStations: Station[]): { city: string }[] {
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
