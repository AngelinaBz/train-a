import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { Roles } from '../../models/Roles.model';
import { roleGuard } from './role.guard';

describe('roleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      roleGuard({
        roles: [Roles.MANAGER],
        redirectTo: '',
      })(...guardParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
