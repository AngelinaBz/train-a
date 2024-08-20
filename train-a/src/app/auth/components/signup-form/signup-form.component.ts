import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators
} from '@angular/forms';

import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.pattern(/^[\w\d_]+@[\w\d_]+\.\w{2,7}$/)]],
        password: ['', [Validators.required, this.passwordValidator]],
        repeatPassword: ['', [Validators.required]],
      },
      { validators: this.passwordsMatchValidator },
    );
  }

  passwordValidator(control: AbstractControl) {
    const password: string = control.value;
    const validLength = password && password.length >= 8;

    if (!validLength) {
      return { weakPassword: 'Password must be at least 8 characters long' };
    }
    return null;
  }

  passwordsMatchValidator: ValidatorFn = (group: AbstractControl) => {
    const password = group.get('password')?.value;
    const repeatPassword = group.get('repeatPassword')?.value;
    return password === repeatPassword ? null : { mismatch: true };
  };

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get repeatPassword() {
    return this.signupForm.get('repeatPassword');
  }

  get isValid() {
    return this.signupForm.valid;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
  }
}
