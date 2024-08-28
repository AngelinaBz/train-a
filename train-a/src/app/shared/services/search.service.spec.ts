import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StationInfo } from '../models/search.models';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [SearchService],
    });

    service = TestBed.inject(SearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch stations', () => {
    const mockStations: StationInfo[] = [
      { stationId: 1, city: 'Station 1', latitude: 0, longitude: 0 },
      { stationId: 2, city: 'Station 2', latitude: 0, longitude: 0 },
    ];

    service.getStations().subscribe((stations) => {
      expect(stations.length).toBe(2);
      expect(stations).toEqual(mockStations);
    });

    const req = httpMock.expectOne('/api/station');
    expect(req.request.method).toBe('GET');
    req.flush(mockStations);
  });
});
