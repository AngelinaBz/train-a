import { FormControl, FormGroup } from '@angular/forms';

export function dateValidator(control: FormControl): { [key: string]: boolean } | null {
  const regex = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!control.value || regex.test(control.value)) {
    return null;
  }
  return { invalidDate: true };
}

export function timeValidator(control: FormControl): { [key: string]: boolean } | null {
  const regex = /^(0[1-9]|1[0-2]):([0-5]\d) ?([APap][Mm])$/;
  if (!control.value || regex.test(control.value)) {
    return null;
  }
  return { invalidTime: true };
}

export function isFormValid(formGroup: FormGroup): boolean {
  return formGroup.valid;
}

export function formatToTwoDigits(value: number): string {
  return value.toString().padStart(2, '0');
}

export function formatDate(dateTime: string): string {
  const date = new Date(dateTime);
  return `${formatToTwoDigits(date.getUTCDate())}.${formatToTwoDigits(date.getUTCMonth() + 1)}.${date.getUTCFullYear()}`;
}

export function formatTime(dateTime: string): string {
  const date = new Date(dateTime);
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const suffix = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12;
  const formattedHours = formatToTwoDigits(hours);
  const formattedMinutes = formatToTwoDigits(minutes);
  return `${formattedHours}:${formattedMinutes} ${suffix}`;
}

export function parseDateTime(date: string, time: string): string {
  const [day, month, year] = date.split('.');
  const [timePart, period] = time.split(/ ?(?=[APap][Mm])/);
  // eslint-disable-next-line prefer-const
  let [hours, minutes] = timePart.split(':').map(Number);
  if (period.toUpperCase() === 'PM' && hours < 12) {
    hours += 12;
  } else if (period.toUpperCase() === 'AM' && hours === 12) {
    hours = 0;
  }
  const localDate = new Date(+year, +month - 1, +day, hours, minutes);
  const timezoneOffset = localDate.getTimezoneOffset() * 60000;
  const utcDate = new Date(localDate.getTime() - timezoneOffset);
  return utcDate.toISOString();
}
