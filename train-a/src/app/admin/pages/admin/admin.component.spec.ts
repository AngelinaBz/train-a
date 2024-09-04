import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule, AdminComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            firstChild: {
              url: of([{ path: 'stations' }]),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set activeTabIndex based on current route', () => {
    component.ngOnInit();
    expect(component.activeTabIndex).toBe(0);
  });

  it('should navigate to the correct route when a tab is changed', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const event: MatTabChangeEvent = { index: 1 } as MatTabChangeEvent;

    component.onTabChange(event);

    expect(navigateSpy).toHaveBeenCalledWith(['/admin/carriages']);
  });
});
