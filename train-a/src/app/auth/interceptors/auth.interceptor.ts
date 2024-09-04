import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

import { paths } from '../../shared/configs/paths';
import { AuthFacade } from '../state/auth.facade';

const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authFacade = inject(AuthFacade);
  const token = toSignal(authFacade.authToken$);
  const router = inject(Router);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token()}`,
    },
  });

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && token()) {
        authFacade.logout();
        router.navigate([paths.signin]);
      }
      return throwError(() => error);
    }),
  );
};

export default authInterceptor;
