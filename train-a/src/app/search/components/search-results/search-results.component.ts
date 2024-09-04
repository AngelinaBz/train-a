import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CarriageFacade } from '../../../carriages/state/carriage.facade';
import { Carriage } from '../../../carriages/state/carriage.model';
import { paths } from '../../../shared/configs/paths';
import { ApiError } from '../../../shared/models/ApiError.model';
import { Station } from '../../../stations/models/station.model';
import { StationFacade } from '../../../stations/state/station.facade';
import { SearchCriteria, SearchResult } from '../../models/Search.model';
import * as SearchActions from '../../state/search/search.actions';
import * as SearchSelectors from '../../state/search/search.selectors';
import { SearchCardComponent } from '../search-card/search-card.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, ReactiveFormsModule, MatButton, RouterLink, SearchCardComponent],
})
export class SearchResultsComponent {
  searchResults$: Observable<SearchResult | null>;
  searchError$: Observable<ApiError | null>;
  stations$: Observable<Station[]>;
  carriages$: Observable<Carriage[]>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store,
    private carriageFacade: CarriageFacade,
    private stationFacade: StationFacade,
    private dialog: MatDialog,
    private router: Router,
  ) {
    this.stationFacade.loadStations();
    this.carriageFacade.loadCarriages();

    this.searchResults$ = this.store.select(SearchSelectors.selectSearchResults);
    this.searchError$ = this.store.select(SearchSelectors.selectError);
    this.stations$ = this.stationFacade.stations$;
    this.carriages$ = this.carriageFacade.carriages$;
    this.loading$ = this.store.select(SearchSelectors.selectLoading);

    this.searchResults$.subscribe((results) => {
      console.log(results?.from, results?.to);
    });
  }

  performSearch(criteria: SearchCriteria) {
    this.store.dispatch(SearchActions.performSearch({ criteria }));
  }

  protected readonly paths = paths;
}
