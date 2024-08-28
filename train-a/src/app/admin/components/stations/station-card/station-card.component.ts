import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { StationList } from '../../../models/map.model';
import { selectStations } from '../../../state/station.selectors';

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './station-card.component.html',
  styleUrl: './station-card.component.scss',
})
export class StationCardComponent implements OnInit {
  @Input() station!: StationList;
  allStations$!: Observable<StationList[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.allStations$ = this.store.select(selectStations);
  }

  getConnectedStations(allStations: StationList[]): { city: string }[] {
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
}
