import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

import { AuthFacade } from '../../state/auth.facade';

export const authGuard = ({ needAuth, redirectTo }: { needAuth: boolean; redirectTo: string }) => {
  const fn: CanActivateFn = () => {
    const authFacade = inject(AuthFacade);
    const router = inject(Router);

    return authFacade.isLoggedIn$.pipe(
      map((isLoggedIn) => {
        if (isLoggedIn === needAuth) {
          return true;
        }
        return router.createUrlTree([redirectTo]);
      }),
    );
  };
  return fn;
};
