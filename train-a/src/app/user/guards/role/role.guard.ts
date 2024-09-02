import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CanActivateFn, Router } from '@angular/router';
import { filter, take } from 'rxjs';

import { Roles } from '../../models/Roles.model';
import { UserFacade } from '../../state/user.facade';

export const roleGuard = ({ roles, redirectTo }: { roles: Roles[]; redirectTo: string }) => {
  const fn: CanActivateFn = async () => {
    const router = inject(Router);
    const userFacade = inject(UserFacade);
    const user = toSignal(userFacade.user$);

    if (!user()) {
      userFacade.getUserProfile();

      await new Promise((resolve, reject) => {
        userFacade.state$
          .pipe(
            filter((state) => state.user !== null || state.errors.getUserProfile !== null),
            take(1),
          )
          .subscribe((state) => {
            if (!state.errors.getUserProfile) {
              resolve(null);
            } else {
              reject(new Error(state.errors.getUserProfile.message));
            }
          });
      });
    }

    if (user() && roles.includes(user()!.role)) {
      return true;
    }

    return router.createUrlTree([redirectTo]);
  };
  return fn;
};
