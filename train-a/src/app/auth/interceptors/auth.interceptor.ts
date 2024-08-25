import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { switchMap } from 'rxjs';

import { AuthFacade } from '../state/auth.facade';

const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authFacade = inject(AuthFacade);

  return authFacade.authToken$.pipe(
    switchMap((token) => {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next(authReq);
    }),
  );
};

export default authInterceptor;
