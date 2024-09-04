import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

import { DeleteRideDialogComponent } from './delete-ride-dialog.component';

class MatDialogRefMock {
  close(): void {}
  afterClosed() {
    return of(true);
  }
}

describe('DeleteRideDialogComponent', () => {
  let component: DeleteRideDialogComponent;
  let fixture: ComponentFixture<DeleteRideDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteRideDialogComponent],
      providers: [{ provide: MatDialogRef, useClass: MatDialogRefMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteRideDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
