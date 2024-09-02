import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providers } from '../../../app.config';
import { RoutesAdminPageComponent } from './routes-admin-page.component';

describe('RoutesAdminPageComponent', () => {
  let component: RoutesAdminPageComponent;
  let fixture: ComponentFixture<RoutesAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutesAdminPageComponent],
      providers,
    }).compileComponents();

    fixture = TestBed.createComponent(RoutesAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
