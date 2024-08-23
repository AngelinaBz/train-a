import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, CommonModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SigninFormComponent implements OnInit {
  signinForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w\d_]+@[\w\d_]+\.\w{2,7}$/)]],
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value.trim();
    if (password.length < 8) {
      return { weakPassword: 'Password must be at least 8 characters long' };
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
    console.log(this.signinForm.value);
  }
}
