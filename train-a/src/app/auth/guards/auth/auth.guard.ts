import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { first, map } from 'rxjs';

import { AuthFacade } from '../../state/auth.facade';

export const authGuard: CanActivateFn = () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);

  return authFacade.isLoggedIn$.pipe(
    first(),
    map((isLoggedIn) => {
      if (!isLoggedIn) {
        return true;
      }
      return router.createUrlTree(['/']);
    }),
  );
};
