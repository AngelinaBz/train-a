import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

import { AuthFacade } from '../../state/auth.facade';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, CommonModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;
  isSubmitted = false;
  authError$ = this.authFacade.authError$;
  isRegistered$ = this.authFacade.isRegistered$;

  matcher: ErrorStateMatcher = {
    isErrorState: (control: FormControl | null): boolean => !!(control && control.invalid && (control.dirty || control.touched)),
  };

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private router: Router,
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.pattern(/^[\w\d_]+@[\w\d_]+\.\w{2,7}$/)]],
        password: ['', [Validators.required, this.passwordValidator]],
        repeatPassword: ['', [Validators.required]],
      },
      { validators: this.passwordsMatchValidator('password', 'repeatPassword') },
    );
    this.authError$.subscribe((error) => {
      if (error) {
        this.signupForm.get('email')?.setErrors({ serverError: 'Account with this email already exists' });
      }
    });
    this.isRegistered$.subscribe((isRegistered) => {
      if (isRegistered) {
        this.router.navigate(['/signin']);
      }
    });
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value.trim();
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
    this.isSubmitted = true;
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.authFacade.signup(email, password);
    }
  }
}
