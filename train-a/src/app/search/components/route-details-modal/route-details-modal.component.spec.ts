import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { providers } from '../../../app.config';
import { RouteDetailsModalComponent } from './route-details-modal.component';

describe('RouteDetailsModalComponent', () => {
  let component: RouteDetailsModalComponent;
  let fixture: ComponentFixture<RouteDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteDetailsModalComponent],
      providers: [...providers, { provide: MAT_DIALOG_DATA, useValue: { detailsId: 1 } }],
    }).compileComponents();

    fixture = TestBed.createComponent(RouteDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
