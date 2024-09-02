import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { UserFacade } from '../../../user/state/user.facade';
import { userReducer } from '../../../user/state/user.reducers';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ user: userReducer })],
      declarations: [HeaderComponent],
      providers: [UserFacade],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
