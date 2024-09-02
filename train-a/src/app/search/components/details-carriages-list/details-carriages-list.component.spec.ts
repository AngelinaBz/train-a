import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providers } from '../../../app.config';
import { DetailsCarriagesListComponent } from './details-carriages-list.component';

describe('DetailsCarriagesListComponent', () => {
  let component: DetailsCarriagesListComponent;
  let fixture: ComponentFixture<DetailsCarriagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCarriagesListComponent],
      providers,
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsCarriagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
