import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providers } from '../../../app.config';
import { CarriageAdminPageComponent } from './carriage-admin-page.component';

describe('CarriageAdminPageComponent', () => {
  let component: CarriageAdminPageComponent;
  let fixture: ComponentFixture<CarriageAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarriageAdminPageComponent],
      providers,
    }).compileComponents();

    fixture = TestBed.createComponent(CarriageAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
