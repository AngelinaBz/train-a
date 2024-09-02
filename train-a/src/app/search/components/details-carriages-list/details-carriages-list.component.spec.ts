import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providers } from '../../../app.config';
import carriageMock from '../../../shared/test/mock/carriageMock';
import detailsMock from '../../../shared/test/mock/detailsMock';
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
    component.details = detailsMock;
    component.carriages = carriageMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
