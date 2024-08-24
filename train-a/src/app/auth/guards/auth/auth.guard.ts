import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

import { SigninService } from '../../services/signin/signin.service';

export const authGuard = ({ needAuth, redirectTo }: { needAuth: boolean; redirectTo: string }) => {
  const fn: CanActivateFn = () => {
    const signinService = inject(SigninService);
    const router = inject(Router);

    return signinService.isLoggedIn$.pipe(
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
