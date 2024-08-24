import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { first, map } from 'rxjs';

import { SigninService } from '../../services/signin/signin.service';

export const authGuard: CanActivateFn = () => {
  const signinService = inject(SigninService);
  const router = inject(Router);

  return signinService.isLoggedIn$.pipe(
    first(),
    map((isLoggedIn) => {
      if (!isLoggedIn) {
        return true;
      }
      return router.createUrlTree(['/']);
    }),
  );
};
