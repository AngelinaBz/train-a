import { ComponentFixture, TestBed } from '@angular/core/testing';

import { providers } from '../../../app.config';
import { OrdersPageComponent } from './orders-page.component';

describe('OrdersPageComponent', () => {
  let component: OrdersPageComponent;
  let fixture: ComponentFixture<OrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersPageComponent],
      providers,
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
