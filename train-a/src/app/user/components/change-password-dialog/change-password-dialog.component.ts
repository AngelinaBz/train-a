import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Subscription } from 'rxjs';

import { UserFacade } from '../../state/user.facade';

@Component({
  selector: 'app-change-password-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    MatError,
    MatLabel,
    MatFormField,
    MatInput,
    MatDialogContent,
    MatDialogTitle,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './change-password-dialog.component.html',
  styleUrl: './change-password-dialog.component.scss',
})
export class ChangePasswordDialogComponent {
  errors$ = this.userFacade.errors$;
  errors = toSignal(this.userFacade.errors$);
  newPasswordControl = new FormControl('', [Validators.required]);
  private subscription: Subscription | undefined;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordDialogComponent>,
    private userFacade: UserFacade,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.newPasswordControl.valid && this.newPasswordControl.value) {
      this.userFacade.updateUserPassword(this.newPasswordControl.value);
      this.subscription = this.errors$.subscribe((error) => {
        if (!error.updateUserPassword) {
          this.dialogRef.close();
        }
      });
    }
  }
}
