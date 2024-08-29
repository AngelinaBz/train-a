import { Validators } from '@angular/forms';

export const cityNameValidator = Validators.required;

export const latitudeValidator = [Validators.required, Validators.min(-90), Validators.max(90)];

export const longitudeValidator = [Validators.required, Validators.min(-180), Validators.max(180)];
