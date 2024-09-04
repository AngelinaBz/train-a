import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providers } from '../../../app.config';
import { DetailsTabGroupComponent } from './details-tab-group.component';

describe('DetailsTabGroupComponent', () => {
  let component: DetailsTabGroupComponent;
  let fixture: ComponentFixture<DetailsTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTabGroupComponent],
      providers,
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
