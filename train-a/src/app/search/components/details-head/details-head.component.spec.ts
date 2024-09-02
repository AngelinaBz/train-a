import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providers } from '../../../app.config';
import detailsMock, { from, rideId, to } from '../../../shared/test/mock/detailsMock';
import stationsMock from '../../../shared/test/mock/stationsMock';
import { DetailsHeadComponent } from './details-head.component';

describe('DetailsHeadComponent', () => {
  let component: DetailsHeadComponent;
  let fixture: ComponentFixture<DetailsHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsHeadComponent],
      providers,
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsHeadComponent);
    component = fixture.componentInstance;

    component.id = String(rideId);
    component.from = String(from);
    component.to = String(to);
    component.details = detailsMock;
    component.stations = stationsMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
