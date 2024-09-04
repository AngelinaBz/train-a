import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providers } from '../../../app.config';
import detailsMock, { from, rideId, to } from '../../../shared/test/mock/detailsMock';
import { SearchResultsStations } from '../../models/Search.model';
import { SearchCardComponent } from './search-card.component';

describe('SearchCardComponent', () => {
  let component: SearchCardComponent;
  let fixture: ComponentFixture<SearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCardComponent],
      providers,
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCardComponent);
    component = fixture.componentInstance;
    component.to = {
      stationId: to,
      city: 'London',
      geolocation: {
        latitude: 50,
        longitude: 50,
      },
    } as SearchResultsStations;
    component.from = {
      stationId: from,
      city: 'Moscow',
      geolocation: {
        latitude: 50,
        longitude: 50,
      },
    } as SearchResultsStations;

    component.rideId = rideId;

    component.rideDetails = detailsMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
