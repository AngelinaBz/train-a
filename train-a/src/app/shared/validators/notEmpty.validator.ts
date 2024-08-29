import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function notEmptyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password: string = control.value.trim();
    if (password === '') {
      return { notEmptyValidator: 'The password must contain at least one character excluding spaces' };
    }
    return null;
  };
}
