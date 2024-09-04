import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { providers } from '../../../app.config';
import { CancelDialogComponent } from './cancel-dialog.component';

describe('CancelDialogComponent', () => {
  let component: CancelDialogComponent;
  let fixture: ComponentFixture<CancelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelDialogComponent],
      providers: [...providers, { provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(CancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
