import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { CarriageFacade } from '../../carriages/state/carriage.facade';

export function uniqueNameValidator(carriageFacade: CarriageFacade): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return carriageFacade.carriages$.pipe(
      take(1),
      map((carriages) => {
        const isNameTaken = carriages.some((carriage) => carriage.name === control.value);
        return isNameTaken ? { uniqueName: true } : null;
      }),
      catchError(() => of(null)),
    );
  };
}
