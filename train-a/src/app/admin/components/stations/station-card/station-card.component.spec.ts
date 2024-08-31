import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providers } from '../../../../app.config';
import { StationCardComponent } from './station-card.component';

describe('StationCardComponent', () => {
  let component: StationCardComponent;
  let fixture: ComponentFixture<StationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationCardComponent],
      providers,
    }).compileComponents();

    fixture = TestBed.createComponent(StationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
