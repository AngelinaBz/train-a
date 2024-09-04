import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';

import { Roles } from '../../../user/models/Roles.model';
import User from '../../../user/models/User.model';
import { UserFacade } from '../../../user/state/user.facade';
import { HeaderComponent } from './header.component';

interface MockUserFacade {
  user$: Observable<User | null>;
  getUserProfile: jasmine.Spy;
}

describe('HeaderComponent', () => {
  let mockUserFacade: MockUserFacade;

  beforeEach(async () => {
    mockUserFacade = {
      user$: of(null),
      getUserProfile: jasmine.createSpy('getUserProfile'),
    };

    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, HeaderComponent],
      providers: [{ provide: UserFacade, useValue: mockUserFacade }, provideMockStore({})],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should set isAuthenticated and userName correctly when user is authenticated', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;

    mockUserFacade.user$ = of({
      name: 'Test User',
      email: 'test@example.com',
      role: Roles.MANAGER,
    });

    fixture.detectChanges();

    expect(component.isAuthenticated).toBeTrue();
    expect(component.isAdmin).toBeTrue();
    expect(component.userName).toBe('Test User');
  });

  it('should set isAuthenticated to false when user is not authenticated', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;

    mockUserFacade.user$ = of(null);

    fixture.detectChanges();

    expect(component.isAuthenticated).toBeFalse();
    expect(component.isAdmin).toBeFalse();
    expect(component.userName).toBeNull();
  });

  it('should call getUserProfile on init', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();

    expect(mockUserFacade.getUserProfile).toHaveBeenCalled();
  });
});
