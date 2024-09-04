import { FormControl, FormGroup } from '@angular/forms';

export function dateValidator(control: FormControl): { [key: string]: boolean } | null {
  const regex = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!control.value || regex.test(control.value)) {
    return null;
  }
  return { invalidDate: true };
}

export function timeValidator(control: FormControl): { [key: string]: boolean } | null {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!control.value || regex.test(control.value)) {
    return null;
  }
  return { invalidTime: true };
}

export function formatToTwoDigits(value: number): string {
  return value.toString().padStart(2, '0');
}

export function isFormValid(formGroup: FormGroup): boolean {
  return formGroup.valid;
}

export function formatDate(dateTime: string): string {
  const date = new Date(dateTime);
  return `${formatToTwoDigits(date.getDate())}.${formatToTwoDigits(date.getMonth() + 1)}.${date.getFullYear()}`;
}

export function formatTime(dateTime: string): string {
  const date = new Date(dateTime);
  return `${formatToTwoDigits(date.getHours())}:${formatToTwoDigits(date.getMinutes())}`;
}
