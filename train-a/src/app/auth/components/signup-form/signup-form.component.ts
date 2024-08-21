import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, CommonModule, MatFormFieldModule, MatInputModule],
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
      { validators: this.passwordsMatchValidator('password', 'repeatPassword') },
    );
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value;
    if (password.length < 8) {
      return { weakPassword: 'Password must be at least 8 characters long' };
    }
    return null;
  }

  passwordsMatchValidator(passwordKey: string, repeatPasswordKey: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get(passwordKey);
      const repeatPassword = group.get(repeatPasswordKey);

      if (!password || !repeatPassword) {
        return null;
      }

      if (repeatPassword.errors && !repeatPassword.errors['mismatch']) {
        return null;
      }

      if (password.value !== repeatPassword.value) {
        repeatPassword.setErrors({ mismatch: true });
      } else {
        repeatPassword.setErrors(null);
      }

      return null;
    };
  }

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
