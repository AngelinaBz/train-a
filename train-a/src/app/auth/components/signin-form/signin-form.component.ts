import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

import { SigninService } from '../../services/signin/signin.service';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, CommonModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.scss',
})
export class SigninFormComponent implements OnInit {
  signinForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private signinService: SigninService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w\d_]+@[\w\d_]+\.\w{2,7}$/)]],
      password: ['', [Validators.required, this.passwordValidator]],
    });
    this.signinForm.valueChanges.subscribe(() => {
      this.clearServerErrors();
    });
  }

  clearServerErrors() {
    Object.keys(this.signinForm.controls).forEach((field) => {
      const control = this.signinForm.get(field);
      if (control?.hasError('serverError')) {
        control.setErrors({ serverError: null });
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value.trim();
    if (password.length === 0) {
      return { nonempty: 'Please enter a password' };
    }
    return null;
  }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  get isValid() {
    return this.signinForm.valid;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;
      this.signinService.signin(email, password).subscribe((response) => {
        if (response.error) {
          this.signinForm.get('email')?.setErrors({ serverError: 'Incorrect email or password' });
          this.signinForm.get('password')?.setErrors({ serverError: 'Incorrect email or password' });
        } else {
          this.router.navigate(['/']);
        }
      });
    }
  }
}
