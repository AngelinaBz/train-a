import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { providers } from '../../../app.config';
import { paths } from '../../../shared/configs/paths';
import { DetailsPageComponent } from './details-page.component';

describe('DetailsPageComponent', () => {
  let component: DetailsPageComponent;
  let fixture: ComponentFixture<DetailsPageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPageComponent],
      providers: [...providers],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.ngZone?.run(() => {
      router.initialNavigation();
    });
  });

  it('should create', () => {
    fixture.ngZone?.run(async () => {
      await router.navigate([paths.trip, 1], {
        queryParams: { from: '1', to: '2' },
      });
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });
});
