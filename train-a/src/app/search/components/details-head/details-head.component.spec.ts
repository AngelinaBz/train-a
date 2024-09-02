import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providers } from '../../../app.config';
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
